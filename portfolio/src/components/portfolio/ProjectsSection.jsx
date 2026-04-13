import { Card, Tag, Button } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const projects = [
  {
    title: "THE CRUMB & BEAN",
    description:
      "A modern bakery & coffee shop website with a delightful UI, product catalog, and ordering system. Built with a focus on responsive design and smooth user experience.",
    tags: ["ReactJS", "Ant Design", "JSON Server", "Tailwind CSS"],
    github: "https://github.com",
    live: "#",
    gradient: "linear-gradient(135deg, hsl(174, 72%, 44%), hsl(220, 90%, 56%))",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="blob blob-2 top-20 -right-20 animate-blob-move" style={{ animationDelay: "1s" }} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">Things I've built with ❤️</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.4, delay: i * 0.2 }}
            >
              <Card
                hoverable
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: "var(--shadow-card)",
                  border: "none",
                }}
              >
                <div
                  className="h-4 w-full -mt-6 -mx-6 mb-6"
                  style={{
                    background: project.gradient,
                    width: "calc(100% + 48px)",
                    marginLeft: -24,
                    marginTop: -24,
                    marginBottom: 24,
                    height: 8,
                  }}
                />
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="font-body text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      style={{
                        borderRadius: 999,
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        background: "hsl(174, 72%, 44%, 0.1)",
                        color: "hsl(174, 72%, 44%)",
                        borderColor: "hsl(174, 72%, 44%, 0.3)",
                      }}
                    >
                      {tag}
                    </Tag>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    icon={<GithubOutlined />}
                    href={project.github}
                    target="_blank"
                    style={{
                      borderRadius: 999,
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                    }}
                  >
                    Source Code
                  </Button>
                  <Button
                    type="primary"
                    icon={<LinkOutlined />}
                    href={project.live}
                    target="_blank"
                    style={{
                      borderRadius: 999,
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      background: "hsl(174, 72%, 44%)",
                      borderColor: "hsl(174, 72%, 44%)",
                    }}
                  >
                    Live Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;