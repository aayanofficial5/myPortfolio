const SocialIcon = ({ href, label, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-accent hover:scale-110 transition-transform"
    >
      {children}
    </a>
  );
};

export default SocialIcon;
