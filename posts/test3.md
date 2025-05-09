---
title: "Embodied Reasoning"
date: "May 15th, 2025"
link: "/infrastructure/ecot"
shortDescription: "VLA chain-of-thought in embodied settings."
image: "/article_images/robo_article_image_1.jpg"
longExcerpt: "We introduce Embodied Chain-of-Thought Reasoning (ECoT) for VLAs, in which we train VLAs to perform multiple steps of reasoning about plans, sub-tasks, motions, and visually grounded features like object bounding boxes and end effector positions, before predicting the robot action. We design a scalable pipeline for generating synthetic training data for ECoT on large robot datasets."
---

We're thrilled to unveil a groundbreaking leap in our robot intelligence research: empowering robots to reason deeply about the physical world through Embodied Chain-of-Thought (ECoT) reasoning. Building on the foundation of our vision-language-action (VLA) models, which leverage vision-language models (VLMs) as their backbone, this new framework equips robots with the ability to tackle complex tasks by reasoning through plans, subtasks, motions, bounding boxes, and end effector positions before executing actions.  
<br/>
Unlike naive Chain-of-Thought (CoT) prompting, which often lacks grounding in real-world contexts, our Embodied Reasoning approach trains VLAs to autoregressively generate structured reasoning chains for both high-level subtask planning and low-level control. This enables robots to carefully deliberate through each task, ensuring robust decision-making in dynamic environments. The result is a system that not only follows instructions but also understands the problem at hand, adapting fluidly to novel challenges.
<br/>
A key innovation of ECoT is its human-in-the-loop integration, which simplifies diagnosing policy failures by allowing engineers to inspect reasoning chains. This transparency boosts performance, with human-in-the-loop oversight improving outcomes by up to 48%. By combining high-level reasoning for task decomposition with precise low-level control reasoning, our framework ensures robots can navigate complex scenarios with unparalleled adaptability.
<br/>
To showcase this capability, we've developed a visual process demonstration, featuring a video animation with typing text to illustrate the robot's reasoning steps in real-time. This advancement marks a significant step toward robots that reason, plan, and act with human-like intelligence, paving the way for more capable and versatile robotic systems.


<BarChartComponent width={500} height={300} data={[{name: 'A', uv: 4000}, {name: 'B', uv: 3000}]}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Bar dataKey="uv" fill="#8884d8" />
</BarChartComponent>