import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="max-w-6xl mx-auto mt-4">
      <h2 className="text-2xl font-semibold">FAQ</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Duration of courese</AccordionTrigger>
          <AccordionContent>
            It&#39; 9 month. We will do our best to complete the couse with in
            time but can be incease for 2 more month if needed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            How can I prepare for a full-stack web development bootcamp?
          </AccordionTrigger>
          <AccordionContent>
            Before starting a bootcamp, it&#39; helpful to review basic
            programming concepts and familiarize yourself with HTML, CSS, and
            JavaScript. Completing any pre-course work provided by the bootcamp
            can also help you hit the ground running once the program begins.
            Additionally, maintaining a growth mindset, staying organized, and
            being prepared to work hard are essential for success in a bootcamp
            environment.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            How much does a full-stack web development bootcamp cost?
          </AccordionTrigger>
          <AccordionContent>
          The bootcamp tuition cost is USD 150. Payment should be made within 3 weeks from the starting date of the class.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Timing of class</AccordionTrigger>
          <AccordionContent>
          We will provide the details on timing through chat. Normally, classes are held from Monday to Friday, each lasting 1 hour. Classes will be recorded so that anyone who misses a class can follow it at their convenience. The daily class details, along with the recorded videos, will be available online.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            How to achive the goal of becoming fullstack web developer after
            completion of bootcamp ?
          </AccordionTrigger>
          <AccordionContent>
            Solidify fundamentals in HTML, CSS, and JavaScript. Dedicate time to
            practice coding, focusing on data structures, regularly. Make sure
            to complete the daily classwork. Repeat the videos, understand each
            concept, and practice a minimum of six times. If you dedicate 2 to 3
            hours of work daily for nine months, becoming proficient in
            full-stack development is achievable. Stay persistent, keep
            learning, and be patient with yourself as you progress toward your
            goal.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faq;