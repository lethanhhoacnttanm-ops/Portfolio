import { Row, Col, Card } from "antd";
import { SafetyCertificateOutlined, CodeOutlined, RocketOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: "hsl(174, 72%, 44%)" }} />,
    title: "Security Mindset",
    desc: "Background in Network Security gives me a unique edge in building secure applications.",
  },
  {
    icon: <CodeOutlined style={{ fontSize: 32, color: "hsl(220, 90%, 56%)" }} />,
    title: "Clean Code",
    desc: "I write maintainable, well-structured code with a focus on best practices.",
  },
  {
    icon: <RocketOutlined style={{ fontSize: 32, color: "hsl(258, 60%, 58%)" }} />,
    title: "Fast Learner",
    desc: "Passionate about learning new technologies and turning ideas into reality.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="blob blob-2 -top-40 right-0 animate-blob-move" style={{ animationDelay: "2s" }} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A developer with a security mindset. I combine my Network Security background from HUFLIT
            with modern frontend skills to build web apps that are both beautiful and robust.
          </p>
        </motion.div>

        <Row gutter={[24, 24]}>
          {highlights.map((item, i) => (
            <Col xs={24} md={8} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", bounce: 0.4, delay: i * 0.15 }}
              >
                <Card
                  hoverable
                  className="text-center h-full"
                  style={{
                    borderRadius: 20,
                    boxShadow: "var(--shadow-card)",
                    border: "none",
                    transition: "box-shadow 0.3s, transform 0.3s",
                  }}
                  styles={{ body: { padding: 32 } }}
                >
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.desc}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default AboutSection;