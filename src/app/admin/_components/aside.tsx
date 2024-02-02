// Components
import { useState } from "react";

// Components
import contentBlock from "./contentBlock/index"

// Framer Motion
import { motion } from "framer-motion";

export const AsideAdmin = () =>{
  const [isOpened, setIsOpened] = useState(false);

  const motionOptions = {
    opened: {
      x: "0"
    },
    closed: {
      x: "calc(100%)"
    }
  }

  return (
    <motion.section 
        className="flex flex-col gap-8"
        animate={isOpened ? motionOptions.closed : motionOptions.opened}
        transition={{
          duration: 0.25,
        }}
      >
        <contentBlock.layout title="Notifications">
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>New user registered.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>Andi Lane subscribed to you.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            
        </contentBlock.layout>
        <contentBlock.layout title="Activities">
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>New user registered.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>Andi Lane subscribed to you.</contentBlock.title>
                <contentBlock.paragraph>Just now</contentBlock.paragraph>
              </div>
            </contentBlock.content>
            
        </contentBlock.layout>
        <contentBlock.layout title="Contacts">
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>New user registered.</contentBlock.title>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>You fixed a bug.</contentBlock.title>
              </div>
            </contentBlock.content>
            <contentBlock.content>
              <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
              <div>
                <contentBlock.title>Andi Lane subscribed to you.</contentBlock.title>
              </div>
            </contentBlock.content>
            
        </contentBlock.layout>
      </motion.section>
  )
}
