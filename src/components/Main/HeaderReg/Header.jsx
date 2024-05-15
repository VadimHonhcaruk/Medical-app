import c from "./Header.module.css";

export const Header = ({ isMobile }) => {
    return (
        <header className={c.header}>
            <div className={c.flextitle}>Реєстрація</div>
        </header>
    )
}
