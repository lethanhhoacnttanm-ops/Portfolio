import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-center border-t border-border">
      <div className="font-display text-xl font-bold gradient-text mb-3">HoaLe.dev</div>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/lethanhhoacnttanm-ops" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <GithubOutlined style={{ fontSize: 22 }} />
        </a>
        <a href="https://www.linkedin.com/in/lethanhhoa-dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <LinkedinOutlined style={{ fontSize: 22 }} />
        </a>
        <a href="mailto:lethanhhoa.cntt.anm@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
          <MailOutlined style={{ fontSize: 22 }} />
        </a>
      </div>
      <p className="font-body text-sm text-muted-foreground">
        Le Thanh Hoa — Full-stack Developer.© {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;