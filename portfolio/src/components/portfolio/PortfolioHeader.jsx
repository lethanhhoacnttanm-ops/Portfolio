import { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const { Header } = Layout;

const navItems = [
  { key: "about", label: "About" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "contact", label: "Contact" },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const PortfolioHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12"
      style={{
        background: "hsla(210, 20%, 98%, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(210, 20%, 90%)",
        height: 72,
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="font-display text-2xl font-bold gradient-text cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        HoaLe.dev
      </motion.div>

      {!isMobile ? (
        <Menu
          mode="horizontal"
          selectable={false}
          style={{ background: "transparent", border: "none", flex: 1, justifyContent: "flex-end" }}
          items={navItems.map((item) => ({
            key: item.key,
            label: (
              <span
                onClick={() => scrollTo(item.key)}
                className="font-body font-semibold text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </span>
            ),
          }))}
        />
      ) : (
        <>
          <Button
            type="text"
            icon={<MenuOutlined style={{ fontSize: 22 }} />}
            onClick={() => setDrawerOpen(true)}
          />
          <Drawer
            title="Menu"
            placement="right"
            onClose={() => setDrawerOpen(false)}
            open={drawerOpen}
          >
            {navItems.map((item) => (
              <div
                key={item.key}
                className="py-3 px-2 text-lg font-body font-semibold cursor-pointer hover:text-primary transition-colors"
                onClick={() => {
                  scrollTo(item.key);
                  setDrawerOpen(false);
                }}
              >
                {item.label}
              </div>
            ))}
          </Drawer>
        </>
      )}
    </Header>
  );
};

export default PortfolioHeader;