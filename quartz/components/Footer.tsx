import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"
import { i18n } from "../i18n"

interface Options {
  links: Record<string, string>
}

export default ((opts?: Options) => {
  function Footer({ displayClass, cfg }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          {i18n(cfg.locale).components.footer.createdWith}{" "}
          <a href="https://quartz.jzhao.xyz/">Quartz v{version}</a>
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
          <li style="display: flex; align-items: center; gap: 8px;">
            جميع الحقوق متروكة
            <svg viewBox="0 0 30 30" height="14"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.443 4.36C7.3 1.447 10.807 0 14.97 0c4.196 0 7.777 1.462 10.725 4.39a14.365 14.365 0 013.214 4.843C29.639 11.037 30 12.964 30 15c0 2.055-.36 3.984-1.093 5.788-.714 1.785-1.781 3.362-3.193 4.737a15.399 15.399 0 01-4.978 3.32A14.972 14.972 0 0114.969 30c-1.983 0-3.883-.374-5.705-1.125-1.804-.767-3.428-1.869-4.874-3.298-1.428-1.446-2.516-3.069-3.266-4.873A14.701 14.701 0 010 15c0-1.982.374-3.882 1.124-5.704a15.224 15.224 0 013.32-4.937zM23.73 6.312C21.319 3.903 18.424 2.7 15.03 2.7c-3.429 0-6.316 1.2-8.655 3.591a13.054 13.054 0 00-2.731 4.044A11.899 11.899 0 002.7 15c0 1.607.32 3.154.945 4.653a12.806 12.806 0 002.73 3.992 12.651 12.651 0 003.993 2.68c1.482.607 3.038.913 4.663.913 1.608 0 3.154-.31 4.654-.935a12.9 12.9 0 004.097-2.71C26.12 21.307 27.3 18.447 27.3 15c0-1.66-.306-3.234-.914-4.716a12.033 12.033 0 00-2.657-3.97zM8.802 15c0-3.961 1.246-8.634 6.198-8.634s6.197 4.673 6.197 8.634c0 3.962-1.245 8.634-6.197 8.634-4.953 0-6.198-4.672-6.198-8.634zm6.755-5.305A2.291 2.291 0 0015 9.622c-2.547 0-2.668 3.633-2.668 5.377 0 .562.014 1.313.116 2.08l3.298-6.06c.342-.592.168-1.016-.19-1.324zM17.668 15c0-.683-.025-1.654-.2-2.584l-3.686 6.366c-.514.772-.157 1.209.41 1.45.05.02.105.037.157.052l.095.031c.172.043.356.064.557.064 2.546 0 2.667-3.634 2.667-5.379z" fill="currentColor"/></svg>
            <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en">CC0</a>
          </li>
        </ul>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
