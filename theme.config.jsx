export default {
  logo: <span>Limitex Docs</span>,
  project: {
    link: "https://github.com/Limitex/docs",
  },
  docsRepositoryBase: "https://github.com/Limitex/docs/blob/main",
  feedback: {
    content: "Feedback →",
    useLink: () => "https://github.com/Limitex/docs/issues/new",
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()}{" "}
        <a href="https://github.com/Limitex" target="_blank">
          Limitex
        </a>
        .
      </span>
    ),
  },
};
