export interface SplitOptions {
  type?: string;
  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;
}

export class DomSplitText {
  elements: HTMLElement[] = [];
  chars: HTMLElement[] = [];
  words: HTMLElement[] = [];
  lines: HTMLElement[] = [];
  private originalContent: Map<HTMLElement, string> = new Map();

  constructor(
    target: string | HTMLElement | (string | HTMLElement)[] | NodeListOf<HTMLElement>,
    options: SplitOptions = {}
  ) {
    const rawElements: HTMLElement[] = [];

    if (typeof target === "string") {
      document.querySelectorAll<HTMLElement>(target).forEach((el) => rawElements.push(el));
    } else if (target instanceof HTMLElement) {
      rawElements.push(target);
    } else if (Array.isArray(target)) {
      target.forEach((item) => {
        if (typeof item === "string") {
          document.querySelectorAll<HTMLElement>(item).forEach((el) => rawElements.push(el));
        } else if (item instanceof HTMLElement) {
          rawElements.push(item);
        }
      });
    } else if (target && "forEach" in target) {
      (target as NodeListOf<HTMLElement>).forEach((el) => rawElements.push(el));
    }

    this.elements = rawElements;
    const linesClass = options.linesClass || "split-line";
    const wordsClass = options.wordsClass || "split-word";
    const charsClass = options.charsClass || "split-char";
    const type = options.type || "chars,words";
    const wantChars = type.includes("chars");
    const wantWords = type.includes("words");

    this.elements.forEach((el) => {
      this.originalContent.set(el, el.innerHTML);
      const text = el.innerText || "";
      el.innerHTML = "";

      const wordsArray = text.split(/(\s+)/);
      const lineWrapper = document.createElement("span");
      lineWrapper.className = linesClass;
      lineWrapper.style.display = "inline-block";

      wordsArray.forEach((token) => {
        if (/^\s+$/.test(token)) {
          lineWrapper.appendChild(document.createTextNode(token));
          return;
        }

        const wordSpan = document.createElement("span");
        wordSpan.className = wordsClass;
        wordSpan.style.display = "inline-block";
        wordSpan.style.whiteSpace = "nowrap";

        if (wantChars) {
          for (let i = 0; i < token.length; i++) {
            const charSpan = document.createElement("span");
            charSpan.className = charsClass;
            charSpan.style.display = "inline-block";
            charSpan.textContent = token[i];
            wordSpan.appendChild(charSpan);
            this.chars.push(charSpan);
          }
        } else {
          wordSpan.textContent = token;
        }

        if (wantWords) {
          this.words.push(wordSpan);
        }
        lineWrapper.appendChild(wordSpan);
      });

      el.appendChild(lineWrapper);
      this.lines.push(lineWrapper);
    });
  }

  revert() {
    this.elements.forEach((el) => {
      const original = this.originalContent.get(el);
      if (original !== undefined) {
        el.innerHTML = original;
      }
    });
    this.chars = [];
    this.words = [];
    this.lines = [];
  }
}

export default DomSplitText;
