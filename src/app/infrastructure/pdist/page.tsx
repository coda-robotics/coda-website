"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { motion, AnimatePresence } from 'framer-motion';

// Import video assets

/*/
import sample1TopVideo from '@/assets/videos/think_harder/sample1/top.mp4';
import sample1LeftVideo from '@/assets/videos/think_harder/sample1/left.mp4';
import sample1RightVideo from '@/assets/videos/think_harder/sample1/right.mp4';

import sample2TopVideo from '@/assets/videos/think_harder/sample2/top.mp4';
import sample2LeftVideo from '@/assets/videos/think_harder/sample2/left.mp4';
import sample2RightVideo from '@/assets/videos/think_harder/sample2/right.mp4';
/*/

const sample1Videos = {
  top: '/think_harder/sample1/top.mp4',
  left: '/think_harder/sample1/left.mp4',
  right: '/think_harder/sample1/right.mp4',
};

const sample2Videos = {
  top: '/think_harder/sample2/top.mp4',
  left: '/think_harder/sample2/left.mp4',
  right: '/think_harder/sample2/right.mp4',
};

//
// Define the shape of a single video entry
//
type VideoItem = {
  src: string
  title: string
  description: string
}

//
// Props for VideoModal
//
interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videos: VideoItem[]
  initialIndex?: number
}

// Add this component definition above the main Reason component
const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videos,
  initialIndex = 0,
  }) => {
  
    const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(initialIndex)
  const modalRef = useRef<HTMLDivElement>(null)
  const [dragStart, setDragStart] = useState<number | null>(null)
  const [copied, setCopied] = useState<boolean>(false)
  
  // Update current index when initialIndex changes
  useEffect(() => {
    setCurrentVideoIndex(initialIndex);
  }, [initialIndex]);
  
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart(clientY);
  };
  
  const handleDragEnd = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (dragStart === null) return;
  
    const clientY = 'changedTouches' in e ? e.changedTouches[0].clientY : e.clientY;
    const diff = dragStart - clientY;
  
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(prev => prev + 1);
      } else if (diff < 0 && currentVideoIndex > 0) {
        setCurrentVideoIndex(prev => prev - 1);
      }
    }
  
    setDragStart(null);
  };

  // Add function to navigate to next/previous video
  const goToNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(prev => prev + 1);
    }
  };

  const goToPrevVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(prev => prev - 1);
    }
  };

  // Add function to handle sharing
  const handleShare = async () => {
    const shareData = {
      title: videos[currentVideoIndex].title,
      text: videos[currentVideoIndex].description,
      url: window.location.href + `?video=${currentVideoIndex}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback to copying URL
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };
  
  // Close modal when clicking outside content or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
  
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
  
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp' && currentVideoIndex > 0) {
        setCurrentVideoIndex(prev => prev - 1);
      } else if (event.key === 'ArrowDown' && currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(prev => prev + 1);
      } else if (event.key === 'ArrowLeft' && currentVideoIndex > 0) {
        setCurrentVideoIndex(prev => prev - 1);
      } else if (event.key === 'ArrowRight' && currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(prev => prev + 1);
      }
    };
  
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, currentVideoIndex, videos.length]);
  
  if (!isOpen) return null;
  
  const currentVideo = videos[currentVideoIndex];
  
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="w-full max-w-5xl mx-auto relative z-10 px-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onMouseDown={handleDragStart}
          onMouseUp={handleDragEnd}
          onTouchStart={handleDragStart}
          onTouchEnd={handleDragEnd}
        >
          <div className="flex flex-col md:flex-row items-start gap-6 bg-transparent p-6 rounded-lg">
            {/* Video carousel on the left */}
            <div className="w-full md:w-2/3 bg-black rounded-lg overflow-hidden shadow-lg relative">
              <video 
                src={currentVideo.src}
                className="w-full aspect-video object-contain"
                controls
                autoPlay
                playsInline
              />
              
              {/* Remove navigation arrows and just keep video counter */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm ">
                {currentVideoIndex + 1} / {videos.length}
              </div>
            </div>
            
            {/* Title, description, and sharing options on the right */}
            <div className="w-full md:w-1/3 text-white pt-0 flex flex-col h-full">
              <h3 className="text-2xl  font-bold">{currentVideo.title}</h3>
              <p className="mt-2 text-gray-200  flex-grow">{currentVideo.description}</p>
              
              {/* Share button and cleaner navigation controls */}
              <div className="mt-4 flex flex-wrap gap-4">
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded  text-sm transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  {copied ? "Copied!" : "Share"}
                </button>
                
                {/* Previous/Next buttons in a cleaner format */}
                <div className="flex gap-2">
                  <button 
                    onClick={goToPrevVideo}
                    className={`px-4 py-2 rounded bg-white/20 hover:bg-white/30 text-white  text-sm transition-colors ${currentVideoIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={currentVideoIndex === 0}
                  >
                    Previous
                  </button>
                  <button 
                    onClick={goToNextVideo}
                    className={`px-4 py-2 rounded bg-white/20 hover:bg-white/30 text-white  text-sm transition-colors ${currentVideoIndex === videos.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                    disabled={currentVideoIndex === videos.length - 1}
                  >
                    Next
                  </button>
                </div>
              </div>
              
              {/* Video thumbnails navigation in a cleaner layout */}
              <div className="mt-6 hidden md:block">
                <h4 className=" text-sm mb-3 text-white">More videos:</h4>
                <div className="flex flex-wrap gap-2">
                  {videos.map((video, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideoIndex(index)}
                      className={`w-10 h-10 rounded-full overflow-hidden ${currentVideoIndex === index ? 'ring-2 ring-white' : 'opacity-70'}`}
                    >
                      <div 
                        className="w-full h-full bg-gray-600 flex items-center justify-center text-xs  text-white"
                      >
                        {index + 1}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Close button - Repositioned further right and higher up */}
          <button 
            className="absolute top-0 right-0 transform -translate-y-8 translate-x-8 text-white p-2 rounded-full bg-black/70 hover:bg-black/90 transition-colors"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const Reason = () => {
  // Performance comparison data for various models
  const modelPerformanceData = [
    {
      task: "Object Recognition",
      openVLA: 0.45,
      openVLAR: 0.62,
      pi0: 0.70,
      pi0R: 0.87,
      rt2: 0.42,
      rt2R: 0.58,
      octo: 0.39,
      octoR: 0.55
    },
    {
      task: "Physical Problem Solving",
      openVLA: 0.38,
      openVLAR: 0.58,
      pi0: 0.65,
      pi0R: 0.84,
      rt2: 0.36,
      rt2R: 0.53,
      octo: 0.33,
      octoR: 0.49
    },
    {
      task: "Causal Inference",
      openVLA: 0.32,
      openVLAR: 0.53,
      pi0: 0.60,
      pi0R: 0.79,
      rt2: 0.31,
      rt2R: 0.49,
      octo: 0.29,
      octoR: 0.45
    },
    {
      task: "Multi-Step Planning",
      openVLA: 0.40,
      openVLAR: 0.61,
      pi0: 0.68,
      pi0R: 0.88,
      rt2: 0.38,
      rt2R: 0.55,
      octo: 0.34,
      octoR: 0.52
    },
    {
      task: "Adapt to Obstacles",
      openVLA: 0.43,
      openVLAR: 0.64,
      pi0: 0.72,
      pi0R: 0.90,
      rt2: 0.41,
      rt2R: 0.59,
      octo: 0.37,
      octoR: 0.54
    }
  ];

  // Training performance data - showing reasoning models achieve same performance with 1/4 of the data
  const trainingData = [
    { iteration: 0, reasoning: 5, baseline: 5 },
    { iteration: 50000, reasoning: 40, baseline: 15 },
    { iteration: 100000, reasoning: 65, baseline: 25 },
    { iteration: 150000, reasoning: 80, baseline: 35 },
    { iteration: 200000, reasoning: null, baseline: 45 },
    { iteration: 300000, reasoning: null, baseline: 55 },
    { iteration: 400000, reasoning: null, baseline: 65 },
    { iteration: 500000, reasoning: null, baseline: 70 },
    { iteration: 600000, reasoning: null, baseline: 80 },
  ];

  // Simulation vs Real world performance data
  const simVsRealData = [
    {
      task: "Object Recognition",
      simulation: 0.62,
      realWorld: 0.57
    },
    {
      task: "Physical Problem Solving",
      simulation: 0.58,
      realWorld: 0.53
    },
    {
      task: "Causal Inference",
      simulation: 0.53,
      realWorld: 0.48
    },
    {
      task: "Multi-Step Planning",
      simulation: 0.61,
      realWorld: 0.55
    },
    {
      task: "Adapt to Obstacles",
      simulation: 0.64,
      realWorld: 0.58
    }
  ];

  // Custom tooltip component to match design with -R models in bold
  const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: any[]; label?: string }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 border border-gray-200 rounded shadow-sm  text-sm">
          <p className="font-bold">{`${label}`}</p>
          {payload.map((entry, index) => {
            // Check if this is an "-R" model to make it bold
            const isReasoningModel = entry.name.includes('-R');
            return (
              <p key={index} style={{ 
                color: entry.color,
                fontWeight: isReasoningModel ? 'bold' : 'normal' 
              }}>
                {`${entry.name}: ${(entry.value * 100).toFixed(0)}%`}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

  // Format X-axis labels (k for thousands)
  const formatXAxis = (value: number) => {
    return value === 0 ? "0" : `${(value / 1000).toFixed(0)}k`;
  };

  // State to track the current reasoning video sample
  const [currentVideoSample, setCurrentVideoSample] = useState(1);
  
  // Create refs for the videos
  const topVideoRef = useRef<HTMLVideoElement>(null);
  const leftVideoRef = useRef<HTMLVideoElement>(null);
  const rightVideoRef = useRef<HTMLVideoElement>(null);

  // Video sets organized by sample number
  const videoSets = {
    1: sample1Videos,
    2: sample2Videos,
  };

  // Sample descriptions
  const sampleDescriptions = {
    1: "Robots show success in simulation",
    2: "Training on reasoning datasets improves real world performance"
  };
  
  // Function to handle sample selection and play videos
  const handleSampleClick = (sampleNum: number) => {
    setCurrentVideoSample(sampleNum);
  };
  
  // UseEffect to trigger video playback when current sample changes
  useEffect(() => {
    // Play all videos when the current sample changes
    if (topVideoRef.current) {
      topVideoRef.current.load(); // Reload the video to ensure it starts from the beginning
      topVideoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
    
    if (leftVideoRef.current) {
      leftVideoRef.current.load();
      leftVideoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
    
    if (rightVideoRef.current) {
      rightVideoRef.current.load();
      rightVideoRef.current.play().catch(e => console.log("Video play failed:", e));
    }
  }, [currentVideoSample]);

  type TaskKey = 'task1' | 'task2' | 'task3';
  type StatusKey = 'success' | 'fail';

  const [selectedTask, setSelectedTask] = useState<TaskKey>('task1');
  const [selectedStatus, setSelectedStatus] = useState<StatusKey>('success');

  // Task options for the dropdown
  const taskOptions = [
    { id: 'task1', label: 'Eggs in carton' },
    { id: 'task2', label: 'Coffee cup manipulation' },
    { id: 'task3', label: 'Box stacking' }
  ];

  // Import video assets (we'll reuse the ones from FastTokenization)
  const videos: Record<TaskKey, Record<StatusKey, string>> = {
    task1: { success: '/task1/success.mp4', fail: '/task1/fail.mp4' },
    task2: { success: '/task2/success.mp4', fail: '/task2/fail.mp4' },
    task3: { success: '/task3/success.mp4', fail: '/task3/fail.mp4' },
  };

  // Get current video based on selected task and status
  const currentVideo = videos[selectedTask][selectedStatus];

  // Descriptions for each task - modified for reasoning context
  const taskDescriptions = {
    task1: "Robot attempting to identify, pick up, and place eggs into a carton using reasoning-enhanced FAST tokenization for adaptive grasping.",
    task2: "Demonstration of the robot manipulating a coffee cup with proper grip force and position reasoning when unexpected obstacles are present.",
    task3: "Robot stacking boxes of varying sizes, showing causal reasoning and sequential planning capabilities enabled by our approach."
  };

  // Add state for modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Add state to track which video to display initially
  const [initialVideoIndex, setInitialVideoIndex] = useState(0);
  
  // Check URL parameters for video index when component mounts
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const videoParam = params.get('video');
    if (videoParam) {
      const videoIndex = parseInt(videoParam, 10);
      if (!isNaN(videoIndex) && videoIndex >= 0 && videoIndex < demoVideos.length) {
        setInitialVideoIndex(videoIndex);
        setIsModalOpen(true);
      }
    }
  }, []);
  
  // Define demo videos (add paths from your videos folder)
  const demoVideos = [
    {
      src: sample1Videos.top,
      title: "Robot Reasoning in Simulation",
      description: "Demonstration of our reasoning-enhanced approach in simulation environments, showing the robot's ability to understand and adapt to complex tasks."
    },
    {
      src: sample1Videos.left, 
      title: "Reasoning-Enhanced Object Manipulation",
      description: "The robot uses our reasoning framework to manipulate objects with precision, adapting to unexpected scenarios in real-time."
    },
    {
      src: sample1Videos.right,
      title: "Visual Understanding with Reasoning",
      description: "OpenVLA-R demonstrates enhanced visual understanding through reasoning about spatial relationships and object interactions."
    },
    {
      src: sample2Videos.top,
      title: "Real-World Reasoning Demonstration",
      description: "Robot applying reasoning capabilities in real-world environments, showing robust transfer from simulation training."
    },
    {
      src: sample2Videos.left,
      title: "Multi-step Planning with Reasoning",
      description: "Robot executes a complex multi-step task requiring inference, causal reasoning, and adaptive planning."
    },
    {
      src: sample2Videos.right,
      title: "Failure Recovery through Reasoning",
      description: "Demonstration of how reasoning allows robots to identify failures and autonomously recover without human intervention."
    },
    {
      src: videos.task1.success,
      title: "Egg Manipulation with Reasoning",
      description: "Robot using reasoning to determine appropriate grasping strategies for delicate egg handling and placement."
    },
    {
      src: videos.task2.success,
      title: "Adaptive Cup Manipulation",
      description: "Reasoning-enhanced approach allows the robot to handle a coffee cup with appropriate force and positioning."
    },
    {
      src: videos.task3.success,
      title: "Sequential Box Stacking with Reasoning",
      description: "Robot demonstrates causal reasoning to build stable structures with boxes of varying sizes and weights."
    }
  ];
   

  // State for tracking the sample index
  const [sampleIndex, setSampleIndex] = useState(0);
  const originalInstructions = [
    `Put small spoon from basket to tray`,
    `Put small spoon from basket to tray`,
    `Put small spoon from basket to tray`,
  ];
  const reasoningTexts = [
    `Episode 1: put small spoon from basket to tray\n\nTASK:\n"put small spoon from basket to tray"\n\nPLAN:\nMove to the small spoon, grasp it, move to the tray", release the small spoon.\n\nSUBTASK REASONING:\nThe device needs to adjust its horizontal position for the task: "put small spoon from basket to tray"\n\nSUBTASK:\nMove right\n\nMOVE REASONING:\nMoving right will align the gripper with the target location\n\nMOVE:\nmove right\n\nVISIBLE OBJECTS:\na small spoon various utensils the small spoon [134, 112, 170, 188], a tray [87, 81, 256, 256], a basket [0, 75, 128, 229]\n\nGRIPPER POSITION:\n[98, 57]`,
    `Episode 1: put small spoon from basket to tray\n\nTASK:\n"put small spoon from basket to tray"\n\nPLAN:\nMove to the small spoon, grasp it, move to the tray", release the small spoon.\n\nSUBTASK REASONING:\nThe device needs to raise its position to manipulate objects for the task: "put small spoon from basket to tray"\n\nSUBTASK:\nMove upward\n\nMOVE REASONING:\nMoving upward will position the gripper at the right height\n\nMOVE:\nmove backward up\n\nVISIBLE OBJECTS:\na basket [0, 58, 128, 228], a small spoon various utensils the small spoon [135, 113, 170, 187], a a stainless steel dish a a dish drainer a dish drainer tray the dish [87, 81, 256, 256], a a small spoon [10, 92, 44, 129]\n\nGRIPPER POSITION:\n[106, 39]`,
    `Episode 1: put small spoon from basket to tray\n\nTASK:\n"put small spoon from basket to tray"\n\nPLAN:\nMove to the small spoon, grasp it, move to the tray', release the small spoon.\n\nSUBTASK REASONING:\nThis movement is needed to progress in completing the task: "put small spoon from basket to tray"\n\nSUBTASK:\nExecute movement: move down, rotate clockwise\n\nMOVE REASONING:\nThis specific movement helps position the device correctly\n\nMOVE:\nmove down, rotate clockwise\n\nVISIBLE OBJECTS:\na small spoon various utensils the small spoon [128, 117, 162, 184], a tray [87, 81, 256, 256], a basket [0, 59, 125, 228], a a small spoon [8, 90, 40, 153]\n\nGRIPPER POSITION:\n[134, 56]`,
  ];

  // Arrays for original and reasoned images
  const originalImages = [
    '/original_image_1.png',
    '/original_image_2.png',
    '/original_image_3.png'
  ];
  
  const reasonedImages = [
    '/reasoned_image_1.png',
    '/reasoned_image_2.png',
    '/reasoned_image_3.png'
  ];
  

  // State for tracking the show reasoning modal
  const [showReasoningModal, setShowReasoningModal] = useState(false);

  return (
    <div className="min-h-screen">

      <div className="max-w-[50rem] mx-auto px-6 py-0">
        <div className="mt-0 md:mt-0">
          {/* Heading with consistent spacing */}
          <div className="mb-12 mt-12">
            <h1 className="bw-gradual-heading research-heading">
              <span>VLA Arena</span>
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-10 ">
            <div className="text-gray-600">Published</div>
            <div className="md:col-span-3">May 15, 2025</div>
            
            <div className="text-gray-600">Email</div>
            <div className="md:col-span-3">
              <a href="mailto:research@physicalintelligence.company" className="underline hover:no-underline">
                founders@codarobotics.ai
              </a>
            </div>
            
         </div>
          
          {/*<div className="mb-10">
            <button className="border border-black rounded px-3 py-1  flex items-center hover:bg-gray-100">
              <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Convert Datasets
            </button>
          </div> */}
          
          <div className="space-y-6  text-base">
            <p>
            We're thrilled to unveil a groundbreaking leap in our robot intelligence research: empowering robots to reason deeply about the physical world through Embodied Chain-of-Thought (ECoT) reasoning. Building on the foundation of our vision-language-action (VLA) models, which leverage vision-language models (VLMs) as their backbone, this new framework equips robots with the ability to tackle complex tasks by reasoning through plans, subtasks, motions, bounding boxes, and end effector positions before executing actions.
            </p>
            
            <p>
            Unlike naive Chain-of-Thought (CoT) prompting, which often lacks grounding in real-world contexts, our Embodied Reasoning approach trains VLAs to autoregressively generate structured reasoning chains for both high-level subtask planning and low-level control. This enables robots to carefully deliberate through each task, ensuring robust decision-making in dynamic environments. The result is a system that not only follows instructions but also understands the problem at hand, adapting fluidly to novel challenges.
            </p>
            
            <p>
            A key innovation of ECoT is its human-in-the-loop integration, which simplifies diagnosing policy failures by allowing engineers to inspect reasoning chains. This transparency boosts performance, with human-in-the-loop oversight improving outcomes by up to 48%. By combining high-level reasoning for task decomposition with precise low-level control reasoning, our framework ensures robots can navigate complex scenarios with unparalleled adaptability.
            </p>

            <p>
            To showcase this capability, we've developed a visual process demonstration, featuring a video animation with typing text to illustrate the robot's reasoning steps in real-time. This advancement marks a significant step toward robots that reason, plan, and act with human-like intelligence, paving the way for more capable and versatile robotic systems.
            </p>

            {/* Reasoning Episode Comparison Section */}
            <div className="mt-12 mb-10 py-8">
              <h2 className=" text-xl font-medium mb-8 flex items-center text-gray-900">
                View a Random Action
                <button
                  className="ml-4 px-4 py-2 bg-black text-white  text-sm rounded shadow hover:bg-white hover:text-black transition text-center border border-black flex items-center"
                  onClick={() => setSampleIndex(Math.floor(Math.random() * 3))}
                  type="button"
                >
                  {/* <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582M20 20v-5h-.581M5 9A7.003 7.003 0 0012 19a7.003 7.003 0 007-10M5 9V8a7 7 0 0114 0v1" />
                  </svg> */}
                  Sample
                </button>
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-start justify-center relative">
                {/* Left: Original Image and Instruction */}
                <div className="flex flex-col items-center w-full md:w-1/2">
                  <span className=" text-base text-gray-600 mb-2">Original Episode</span>
                  <div className="border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center bg-white">
                    <img
                      src={originalImages[sampleIndex]}
                      alt={`Original episode ${sampleIndex + 1}`}
                      className="rounded-lg shadow w-full max-w-xs mb-4 border border-gray-300 object-contain"
                      style={{ background: '#fff', minHeight: 220 }}
                    />
                    <div className="mt-2 px-4 py-2 text-white text-sm rounded shadow text-center border border-black bg-black">
                      {originalInstructions[sampleIndex]}
                    </div>
                  </div>
                </div>
                {/* Right: Reasoned Image and Reasoning Text */}
                <div className="flex flex-col items-center w-full md:w-1/2 relative">
                  <span className=" text-base text-gray-600 mb-2">Embodied Reasoning</span>
                  <div className="border border-gray-200 rounded-xl shadow-sm p-4 flex flex-col items-center bg-white">
                    <img
                      src={reasonedImages[sampleIndex]}
                      alt={`Reasoned episode ${sampleIndex + 1}`}
                      className="rounded-lg shadow w-full max-w-xs mb-4 border border-gray-300 object-contain"
                      style={{ background: '#fff', minHeight: 220 }}
                    />
                    <button
                      className="mt-2 px-4 py-2 bg-black hover:bg-white text-white hover:text-black text-sm rounded shadow transition text-center border border-black"
                      onClick={() => setShowReasoningModal(true)}
                      type="button"
                    >
                      View Embodied Reasoning &rarr;
                    </button>
                    {/* Modal for full reasoning text, positioned to the right */}
                    {showReasoningModal && (
                      <div
                        className="absolute z-50"
                        style={{
                          left: 'calc(100% - 50px)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          height: '50%',
                          display: 'flex',
                          alignItems: 'stretch',
                        }}
                      >
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-300 relative flex flex-col justify-between" style={{ width: 260, height: '100%' }}>
                          <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 font-bold text-lg"
                            onClick={() => setShowReasoningModal(false)}
                            aria-label="Close"
                          >
                            &times;
                          </button>
                          <h3 className=" text-sm font-bold mb-2 text-gray-900 px-8 pt-8">Embodied Reasoning</h3>
                          <pre className="whitespace-pre-line  text-xs text-gray-900 rounded p-8 pt-0 overflow-x-auto overflow-y-auto flex-1 bg-white" style={{ minHeight: 0 }}>
                            {reasoningTexts[sampleIndex]}
                          </pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Model Performance Comparison Chart Section */}
            <div className="mt-12 mb-8">
              <h3 className=" text-xl font-medium mb-4">Performance Improvements on <a href="https://vlabench.github.io/" className="underline hover:text-gray-700 transition-colors duration-300">VLA Bench</a></h3>
              
              {/* "R" Suffix Explanation Box */}
              <div className="flex mb-6">
                <div 
                  className="bg-black hover:bg-white px-5 py-2 text-white hover:text-black text-center  text-sm border border-black"
                  style={{ 
                    borderRadius: '4px',
                    boxShadow: '1px 1px 0px rgba(0,0,0,0.5)'
                  }}
                >
                  VLAs trained on reasoning datasets achieve 25% higher accuracy
                </div>
              </div>
              
              <div className="bg-transparent p-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={modelPerformanceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 60 }}
                      barGap={2}
                      barCategoryGap={20}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                      <XAxis 
                        dataKey="task" 
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 9 }}
                        tickLine={false}
                        axisLine={{ stroke: '#555' }}
                        height={60}
                        interval={0}
                      />
                      <YAxis 
                        domain={[0, 1]} 
                        ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                        tickFormatter={(value) => `${(value * 100).toFixed(0)}`}
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 12 }}
                        axisLine={{ stroke: '#555' }}
                        tickLine={{ stroke: '#555' }}
                        label={{ 
                          value: 'Success Rate (%)', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fill: '#aaa', fontSize: 14, fontFamily: 'monospace' }
                        }}
                      />
                      <Tooltip content={<CustomTooltip />} />

                      {/* Monochrome bars - light to dark gray scale */}
                      <Bar dataKey="pi0" name="π₀" fill="#222" stroke="#000" strokeWidth={1} />
                      <Bar dataKey="pi0R" name="π₀-R" fill="#333" stroke="#000" strokeWidth={1} />

                      <Bar dataKey="openVLA" name="OpenVLA" fill="#444" stroke="#000" strokeWidth={1} />
                      <Bar dataKey="openVLAR" name="OpenVLA-R" fill="#555" stroke="#000" strokeWidth={1} />

                      <Bar dataKey="rt2" name="RT-2" fill="#666" stroke="#000" strokeWidth={1} />
                      <Bar dataKey="rt2R" name="RT-2-R" fill="#777" stroke="#000" strokeWidth={1} />

                      <Bar dataKey="octo" name="Octo" fill="#888" stroke="#000" strokeWidth={1} />
                      <Bar dataKey="octoR" name="Octo-R" fill="#999" stroke="#000" strokeWidth={1} />

                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        layout="horizontal"
                        wrapperStyle={{
                          paddingTop: '20px',
                          fontFamily: 'monospace',
                          fontSize: '12px',
                          color: '#aaa'
                        }}
                        iconType="square"
                        iconSize={10}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            
            {/* Task Video Section */}
            <div className="mt-12 mb-8">
              <h3 className=" text-xl font-medium mb-4">The Value of Reasoning</h3>
              
              {/* Add the "View more demonstrations" link right after the heading */}
              <div className="mb-6">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className=" text-sm text-white bg-black py-2 px-4 border border-black shadow-sm hover:bg-gray-100 transition-colors flex items-center"
                >
                  View more demonstrations
                  <svg className="w-3 h-3 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-cream/30 border border-gray-200 rounded-lg p-6">
                {/* Task and Status Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Task Dropdown */}
                  <div>
                    <label htmlFor="taskSelect" className="block text-gray-700 mb-2 ">Task</label>
                    <div className="relative">
                    <select
                      id="taskSelect"
                      value={selectedTask}
                      onChange={(e) => setSelectedTask(e.target.value as TaskKey)}  // Casting the value as TaskKey
                      className="appearance-none w-full bg-black text-white border border-black px-4 py-2 pr-8  focus:outline-none"
                    >
                        {taskOptions.map(task => (
                          <option key={task.id} value={task.id}>{task.label}</option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Success/Fail Toggle (now w/ Coda and w/o Coda) */}
                  <div>
                    <label className="block text-gray-700 mb-2 ">Status</label>
                    <div className="flex">
                      <button
                        className={`flex-1 py-2  text-center transition-colors ${
                          selectedStatus === 'success' 
                            ? 'bg-black text-white border border-black'
                            : 'bg-white text-black border-black border'
                        }`}
                        onClick={() => setSelectedStatus('success')}
                      >
                        w/ Reasoning
                      </button>
                      <button
                        className={`flex-1 py-2  text-center transition-colors ${
                          selectedStatus === 'fail' 
                            ? 'bg-black text-white border border-black'
                            : 'bg-white text-black border-black border'
                        }`}
                        onClick={() => setSelectedStatus('fail')}
                      >
                        w/o Reasoning
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Video Player */}
                <div className="relative rounded-lg overflow-hidden bg-black">
                  <video 
                    src={currentVideo} 
                    className="w-full h-full object-cover aspect-video"
                    controls
                    muted
                    loop
                  />
                </div>
                
                {/* Description Text - Modified for reasoning context */}
                <p className="mt-4 text-sm text-gray-600 ">
                  {taskDescriptions[selectedTask]} {selectedStatus === 'fail' 
                    ? "This demonstration shows the task attempt without Coda's reasoning-enhanced tokenization approach, highlighting the limitations in adaptability and problem-solving." 
                    : "This demonstration shows successful task completion using our reasoning-enhanced FAST tokenization approach, enabling the robot to adapt to unexpected situations."}
                </p>
              </div>
            </div>
            
            {/* Simulation vs Real World Chart Section */}
            <div className="mt-12 mb-8">
              <h3 className=" text-xl font-medium mb-4">Simulation to Real World Transfer</h3>
              
              {/* Sim-to-Real explanation box */}
              <div className="flex mb-6">
                <div 
                  className="bg-black text-white px-5 py-2 text-center  text-sm border border-black"
                  style={{ 
                    borderRadius: '4px',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                  }}
                >
                  Our reasoning framework maintains 90% of performance when transferred to real robots
                </div>
              </div>
              
              <div className="bg-cream/30 border border-gray-200 rounded-lg p-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={simVsRealData}
                      margin={{ top: 5, right: 30, left: 30, bottom: 60 }}
                      barGap={8}
                      barCategoryGap={40}
                      maxBarSize={60}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                      <XAxis 
                        dataKey="task" 
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: '#555' }}
                        height={60}
                        interval={0}
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis 
                        domain={[0, 1]} 
                        ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                        tickFormatter={(value) => `${(Number(value) * 100).toFixed(0)}`}
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 12 }}
                        axisLine={{ stroke: '#555' }}
                        tickLine={{ stroke: '#555' }}
                        label={{ 
                          value: 'Success Rate (%)', 
                          angle: -90, 
                          position: 'insideLeft',
                          offset: -15,
                          style: { textAnchor: 'middle', fill: '#aaa', fontSize: 14, fontFamily: 'monospace' }
                        }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#111', 
                          border: '1px solid #444',
                          borderRadius: '4px',
                          fontFamily: 'monospace',
                          color: '#eee'
                        }}
                        formatter={(value, name) => {
                          const formattedValue = `${(Number(value) * 100).toFixed(0)}%`;
                          const displayName = name === 'simulation' ? 'OpenVLA-R (sim)' : 'OpenVLA-R (real)';
                          return [`${formattedValue}`, displayName];
                        }}
                      />

                      {/* Simulation bars - dark gray */}
                      <Bar 
                        dataKey="simulation" 
                        name="OpenVLA-R (sim)" 
                        fill="#444"
                        stroke="#000" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />

                      {/* Real world bars - light gray */}
                      <Bar 
                        dataKey="realWorld" 
                        name="OpenVLA-R (real)" 
                        fill="#aaa"
                        stroke="#000" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />

                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        layout="horizontal"
                        wrapperStyle={{
                          paddingTop: '20px',
                          fontFamily: 'monospace',
                          fontSize: '12px',
                          color: '#aaa'
                        }}
                        iconType="square"
                        iconSize={10}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Description text - with the correct content for this section */}
                <p className="text-sm text-gray-600  mt-2 text-center">
                  Comparison of OpenVLA-R performance in simulation vs real-world environments. The reasoning framework enables robust transfer, with only a small performance drop when deployed on physical robots.
                </p>
              </div>
            </div>
            
            {/* Inference Speeds Section */}
            <div className="mt-12 mb-8">
              <h3 className=" text-xl font-medium mb-4">Inference Speeds</h3>
              
              {/* Inference speed explanation box */}
              <div className="flex mb-6">
                <div 
                  className="bg-black px-5 py-2 text-center text-white text-sm border border-black"
                  style={{ 
                    borderRadius: '4px',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                  }}
                >
                  OpenVLA-R is only 2.5% slower yet achieves 5x performance
                </div>
              </div>
              
              <div className="bg-transparent border border-gray-200 rounded-lg p-6">
                <div className="h-[450px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        { time: 0, openVLA: 0, openVLAR: 0 },
                        { time: 20, openVLA: 20, openVLAR: 19 },
                        { time: 40, openVLA: 40, openVLAR: 38 },
                        { time: 60, openVLA: 60, openVLAR: 58 },
                        { time: 80, openVLA: 80, openVLAR: 78 },
                        { time: 100, openVLA: 100, openVLAR: 97 },
                        { time: 120, openVLA: 120, openVLAR: 117 },
                        { time: 140, openVLA: 140, openVLAR: 136 },
                        { time: 160, openVLA: 160, openVLAR: 156 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                      <XAxis 
                        dataKey="time" 
                        label={{ 
                          value: 'Time (ms)', 
                          position: 'insideBottom', 
                          offset: -10,
                          style: { textAnchor: 'middle', fill: '#aaa', fontSize: 14, fontFamily: 'monospace' }
                        }}
                        tick={{ fill: '#aaa', fontFamily: 'monospace' }}
                      />
                      <YAxis 
                        domain={[0, 160]} 
                        ticks={[0, 40, 80, 120, 160]}
                        label={{ 
                          value: 'Execution Steps', 
                          angle: -90, 
                          position: 'insideLeft',
                          style: { textAnchor: 'middle', fill: '#aaa', fontSize: 14, fontFamily: 'monospace' }
                        }}
                        tick={{ fill: '#aaa', fontFamily: 'monospace' }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#111', 
                          border: '1px solid #444',
                          borderRadius: '4px',
                          color: '#eee',
                          fontFamily: 'monospace'
                        }}
                        formatter={(value) => [`${value}`, 'Steps']}
                        labelFormatter={(value) => `Time: ${value} ms`}
                      />
                      
                      {/* OpenVLA line - dark gray */}
                      <Line
                        type="monotone"
                        dataKey="openVLA"
                        stroke="#555"
                        strokeWidth={2}
                        dot={{ 
                          r: 5, 
                          strokeWidth: 1,
                          fill: "#555",
                          stroke: "#555"
                        }}
                        activeDot={{ r: 7, stroke: "#555", strokeWidth: 2 }}
                        name="OpenVLA"
                        connectNulls
                      />
                      
                      {/* OpenVLA-R line - light gray */}
                      <Line
                        type="monotone"
                        dataKey="openVLAR"
                        stroke="#bbb"
                        strokeWidth={3}
                        dot={{ 
                          r: 6, 
                          strokeWidth: 2,
                          fill: "#bbb",
                          stroke: "#bbb"
                        }}
                        activeDot={{ r: 8, stroke: "#bbb", strokeWidth: 2 }}
                        name="OpenVLA-R (ours)"
                        connectNulls
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Custom legend centered below the chart */}
                <div className="text-center mt-6 text-sm text-gray-400">
                  <div className="flex justify-center items-center space-x-8">
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-gray-600 mr-2"></span>
                      <span>OpenVLA</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-3 h-3 rounded-full bg-gray-300 mr-2"></span>
                      <span>OpenVLA-R (ours)</span>
                    </div>
                  </div>
                </div>
                
                {/* Description text */}
                <p className="text-sm text-gray-500 mt-6 text-center">
                  Despite a minimal increase in inference time, our reasoning-enhanced model (OpenVLA-R) delivers substantially higher task success rates across various reasoning challenges.
                </p>
              </div>

            </div>
            
            {/* Human in the Loop Section */}
            <div className="mt-12 mb-8">
              <h3 className=" text-xl font-medium mb-4">Human Intervention Improves Performance</h3>
              
              {/* Human-in-the-loop explanation box */}
              <div className="flex mb-6">
                <div 
                  className="bg-black text-white px-5 py-2 text-center text-sm border border-black"
                  style={{ 
                    borderRadius: '4px',
                    boxShadow: '2px 2px 0px rgba(0,0,0,0.5)'
                  }}
                >
                  Human intervention during training improves performance by up to 20%
                </div>
              </div>
              
              <div className="bg-transparent border border-gray-200 rounded-lg p-6">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        {
                          task: "Causal Inference",
                          openVLA: 0.32,
                          openVLAHI: 0.41,
                          openVLAR: 0.53,
                          openVLARHI: 0.68
                        },
                        {
                          task: "Physical Problem Solving",
                          openVLA: 0.38,
                          openVLAHI: 0.49,
                          openVLAR: 0.58,
                          openVLARHI: 0.72
                        },
                        {
                          task: "Adapt to Obstacles",
                          openVLA: 0.43,
                          openVLAHI: 0.55,
                          openVLAR: 0.64,
                          openVLARHI: 0.77
                        }
                      ]}
                      margin={{ top: 5, right: 30, left: 30, bottom: 60 }}
                      barGap={8}
                      barCategoryGap={40}
                      maxBarSize={60}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                      <XAxis 
                        dataKey="task" 
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 12 }}
                        tickLine={false}
                        axisLine={{ stroke: '#666' }}
                        height={60}
                        interval={0}
                        padding={{ left: 10, right: 10 }}
                      />
                      <YAxis 
                        domain={[0, 1]} 
                        ticks={[0, 0.2, 0.4, 0.6, 0.8, 1.0]}
                        tickFormatter={(value) => `${(Number(value) * 100).toFixed(0)}`}
                        tick={{ fill: '#aaa', fontFamily: 'monospace', fontSize: 12 }}
                        axisLine={{ stroke: '#666' }}
                        tickLine={{ stroke: '#666' }}
                        label={{ 
                          value: 'Success Rate (%)', 
                          angle: -90, 
                          position: 'insideLeft',
                          offset: -15,
                          style: { textAnchor: 'middle', fill: '#aaa', fontSize: 14, fontFamily: 'monospace' }
                        }}
                      />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#111', 
                          border: '1px solid #555',
                          borderRadius: '4px',
                          color: '#eee',
                          fontFamily: 'monospace'
                        }}
                        formatter={(value, name) => {
                          const formattedValue = `${(Number(value) * 100).toFixed(0)}%`;
                          let displayName = name;
                          if (name === 'openVLA') displayName = 'OpenVLA';
                          if (name === 'openVLAHI') displayName = 'OpenVLA-HI';
                          if (name === 'openVLAR') displayName = 'OpenVLA-R';
                          if (name === 'openVLARHI') displayName = 'OpenVLA-R-HI';
                          return [` ${displayName}: ${formattedValue}`, ''];
                        }}
                      />
                      
                      {/* OpenVLA bars - dark gray */}
                      <Bar 
                        dataKey="openVLA" 
                        name="OpenVLA" 
                        fill="#444"
                        stroke="#222" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />
                      
                      {/* OpenVLA-HI bars - medium gray */}
                      <Bar 
                        dataKey="openVLAHI" 
                        name="OpenVLA-HI" 
                        fill="#666"
                        stroke="#333" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />
                      
                      {/* OpenVLA-R bars - light gray */}
                      <Bar 
                        dataKey="openVLAR" 
                        name="OpenVLA-R" 
                        fill="#888"
                        stroke="#444" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />
                      
                      {/* OpenVLA-R-HI bars - very light gray */}
                      <Bar 
                        dataKey="openVLARHI" 
                        name="OpenVLA-R-HI" 
                        fill="#aaa"
                        stroke="#555" 
                        strokeWidth={1}
                        radius={[0, 0, 0, 0]}
                      />
                      
                      <Legend
                        verticalAlign="bottom"
                        align="center"
                        layout="horizontal"
                        wrapperStyle={{
                          paddingTop: '20px',
                          fontFamily: 'monospace',
                          fontSize: '12px',
                          color: '#999'
                        }}
                        iconType="square"
                        iconSize={10}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Description text */}
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Comparison showing how human intervention during training significantly enhances model performance. Models with reasoning plus human intervention (OpenVLA-R-HI) achieve the highest success rates across all tasks.
                </p>
              </div>
           </div>
            
            <p>
              Our results show that robots equipped with our reasoning framework can solve complex problems 
              significantly more effectively than baseline models. The framework enables robots to:
            </p>
            
            <ul className="list-disc pl-8 space-y-2">
              <li>Adapt to novel situations not seen during training</li>
              <li>Recover from failures by generating alternative approaches</li>
              <li>Explain their decision-making process in human-understandable terms</li>
              <li>Incorporate human feedback to refine their reasoning</li>
            </ul>
            
            <p>
              We believe this work represents an important step toward more capable and adaptable robotic 
              systems that can reason about the world in ways that are more aligned with human cognition. 
              In the coming months, we'll be releasing more details about our approach and demonstrating its 
              capabilities on increasingly complex tasks.
            </p>
          </div>
        </div>
      </div>
      

      {/* Render the modal */}
      <VideoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        videos={demoVideos}
        initialIndex={initialVideoIndex}
      />
    </div>
  );
};

export default Reason;