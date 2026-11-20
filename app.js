const app = Stimulus.Application.start()

app.register("rotator", class extends Stimulus.Controller {
  static values = { phrases: Array }

  connect() {
    this.i = 0
    this.element.textContent = this.phrasesValue[0]
    this.timer = setInterval(() => this.next(), 2600)
  }

  disconnect() { clearInterval(this.timer) }

  next() {
    this.element.classList.add("hidden")
    setTimeout(() => {
      this.i = (this.i + 1) % this.phrasesValue.length
      this.element.textContent = this.phrasesValue[this.i]
      this.element.classList.remove("hidden")
    }, 400)
  }
})

app.register("age", class extends Stimulus.Controller {
  static values = { from: String }

  connect() {
    const from = new Date(this.fromValue), now = new Date()
    const hadAnniversary = now >= new Date(now.getFullYear(), from.getMonth(), from.getDate())
    this.element.textContent = now.getFullYear() - from.getFullYear() - (hadAnniversary ? 0 : 1)
  }
})

app.register("theme", class extends Stimulus.Controller {
  toggle() {
    const root = document.documentElement
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches
    root.dataset.theme = dark ? "light" : "dark"
    try { localStorage.theme = root.dataset.theme } catch { }
  }
})

app.register("cv", class extends Stimulus.Controller {
  async connect() {
    const md = await (await fetch("data/cv.md")).text()
    this.element.innerHTML = marked.parse(md)
    this.element.querySelectorAll("a[href^='http']").forEach(a => Object.assign(a, { target: "_blank", rel: "noopener" }))
    this.splitContacts(this.element.querySelector("h1 + p"))
    this.element.querySelectorAll("h3").forEach(h => this.collapse(h))
    addEventListener("beforeprint", () => this.element.querySelectorAll("details").forEach(d => d.open = true))
    if (new URLSearchParams(location.search).has("print")) window.print()
  }

  // Wrap each " · " item in a span. Web links get a plain-text twin for print (PDF links don't work).
  splitContacts(line) {
    if (!line) return
    line.innerHTML = line.innerHTML.split(" · ").map((part, i) => {
      const sep = i ? " · " : ""
      const href = part.match(/href="(http[^"]+)"/)?.[1]
      if (!href) return `<span>${sep}${part}</span>`
      const text = href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
      return `<span class="web-only">${sep}${part}</span><span class="print-only">${sep}${text}</span>`
    }).join("")
  }

  collapse(heading) {
    const details = document.createElement("details")
    const summary = document.createElement("summary")
    details.open = true
    summary.innerHTML = heading.innerHTML
    details.append(summary)
    while (heading.nextElementSibling && !/^H[1-3]$/.test(heading.nextElementSibling.tagName)) {
      details.append(heading.nextElementSibling)
    }
    heading.replaceWith(details)
  }
})