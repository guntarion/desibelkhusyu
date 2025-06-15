// src/components/panduan/CustomAudioPlayer.tsx
"use client";

import { Play, Pause } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";

interface CustomAudioPlayerProps {
  src: string;
}

const CustomAudioPlayer: React.FC<CustomAudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  if (!src) {
    return null; // Jangan render apa-apa jika tidak ada sumber audio
  }

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Beberapa browser memerlukan interaksi pengguna untuk memulai audio.
        audioRef.current.play().catch((e) => {
            console.error("Gagal memutar audio:", e)
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => setIsPlaying(false);
      audio.addEventListener('ended', handleEnded);
      
      // Cleanup listener saat komponen di-unmount
      return () => {
        audio.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
       <audio ref={audioRef} src={src} preload="metadata"></audio>
       <Button
        onClick={togglePlayPause}
        variant="outline"
        size="icon"
        className="bg-teal-50 hover:bg-teal-100 dark:bg-teal-900/50 dark:hover:bg-teal-900 border-teal-200 dark:border-teal-800"
        aria-label={isPlaying ? "Jeda" : "Putar"}
      >
        {isPlaying ? <Pause className="h-5 w-5 text-teal-700 dark:text-teal-300" /> : <Play className="h-5 w-5 text-teal-700 dark:text-teal-300" />}
      </Button>
      <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">Dengarkan Bacaan</span>
    </div>
  );
};

export default CustomAudioPlayer;
