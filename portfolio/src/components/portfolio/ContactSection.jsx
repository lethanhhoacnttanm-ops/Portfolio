import { Form, Input, Button, message } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const { TextArea } = Input;

const [loading, setLoading] = useState(false);

const ContactSection = () => {
  const [form] = Form.useForm();



    const onFinish = async (values) => {
      setLoading(true);
    try {
      
      const response = await fetch("https://69d8eeca0576c938825a45ff.mockapi.io/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        
        message.success("Thanks for reaching out! Your info is sending to Hoa 🎉");
        
        
        form.resetFields();
      } else {
        throw new Error("Failed to save");
      }
    } catch (error) {
      message.error("Error");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-muted/50">
      <div className="blob blob-1 -bottom-20 left-1/3 animate-blob-move" style={{ animationDelay: "5s" }} />
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">Have a project in mind? Let's talk!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4, delay: 0.15 }}
          className="max-w-lg mx-auto"
        >
          <Form form={form} layout="vertical" onFinish={onFinish} size="large">
            <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input
                placeholder="Your Name"
                style={{ borderRadius: 16, fontFamily: "var(--font-body)", height: 48 }}
              />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}>
              <Input
                placeholder="Your Email"
                style={{ borderRadius: 16, fontFamily: "var(--font-body)", height: 48 }}
              />
            </Form.Item>
            <Form.Item name="message" rules={[{ required: true, message: "Please enter your message" }]}>
              <TextArea
                placeholder="Your Message"
                rows={5}
                style={{ borderRadius: 16, fontFamily: "var(--font-body)" }}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                loading={loading}
                block
                style={{
                  borderRadius: 999,
                  height: 52,
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: 16,
                  background: "hsl(174, 72%, 44%)",
                  borderColor: "hsl(174, 72%, 44%)",
                }}
              >
                Say Hello 👋
              </Button>
            </Form.Item>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;