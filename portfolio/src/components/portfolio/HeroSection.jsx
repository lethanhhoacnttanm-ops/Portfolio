import { Row, Col, Button } from "antd";
import { DownloadOutlined, GithubOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden">
      <div className="blob blob-1 -top-20 -left-20 animate-blob-move" />
      <div className="blob blob-2 bottom-10 right-10 animate-blob-move" style={{ animationDelay: "3s" }} />

      <div className="container mx-auto relative z-10">
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
            >
              <div className="font-body text-lg text-muted-foreground mb-2">👋 Welcome to my world</div>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                Hi, I'm <span className="gradient-text">Hoa</span> —<br />
                Frontend Enthusiast
              </h1>
              <p className="font-body text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
                Transitioning from Network Security (HUFLIT) to Web Development.
                Building beautiful, secure, and playful web experiences.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a 
                  href="/CV_LeThanhHoa.pdf" 
                  download="CV_LeThanhHoa_Fullstack.pdf"
                  style={{ textDecoration: 'none' }}
                >
                  <Button
                    type="primary"
                    size="large"
                    icon={<DownloadOutlined />}
                    style={{
                      borderRadius: 999,
                      background: "hsl(174, 72%, 44%)",
                      borderColor: "hsl(174, 72%, 44%)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      height: 48,
                      paddingInline: 32,
                    }}
                  >
                    Download CV
                  </Button>
                </a>
                <Button
                  size="large"
                  icon={<GithubOutlined />}
                  href="https://github.com/lethanhhoacnttanm-ops"
                  target="_blank"
                  style={{
                    borderRadius: 999,
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    height: 48,
                    paddingInline: 32,
                    borderColor: "hsl(258, 60%, 58%)",
                    color: "hsl(258, 60%, 58%)",
                  }}
                >
                  GitHub
                </Button>
              </div>
            </motion.div>
          </Col>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src={heroImg}
                alt="Developer illustration"
                className="w-full max-w-md animate-float"
              />
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default HeroSection;