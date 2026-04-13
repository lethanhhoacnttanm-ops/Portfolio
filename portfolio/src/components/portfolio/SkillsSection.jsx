import { Tag } from "antd";
import { motion } from "framer-motion";

const skills = [
  { name: "ReactJS", color: "#0891b2" },
  { name: "Ant Design", color: "#1677ff" },
  { name: "JavaScript", color: "#eab308" },
  { name: "Git", color: "#f97316" },
  { name: "JSON Server", color: "#22c55e" },
  { name: "HTML5", color: "#e34c26" },
  { name: "CSS3", color: "#264de4" },
  { name: "English (B1)", color: "#8b5cf6" },
  { name: "Team Collaboration", color: "#ec4899" },
  { name: "Problem Solving", color: "#06b6d4" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-muted/50">
      <div className="blob blob-1 bottom-0 left-1/4 animate-blob-move" style={{ animationDelay: "4s" }} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">Technologies & tools I work with</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.6, delay: i * 0.07 }}
              whileHover={{ scale: 1.15, rotate: [-2, 2, 0] }}
            >
              <Tag
                style={{
                  fontSize: 16,
                  padding: "8px 20px",
                  borderRadius: 999,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  color: skill.color,
                  borderColor: skill.color,
                  background: `${skill.color}15`,
                  cursor: "default",
                }}
              >
                {skill.name}
              </Tag>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;