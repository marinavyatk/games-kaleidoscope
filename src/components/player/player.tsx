// import useSound from 'use-sound';
// import { useEffect, useRef, useState } from 'react';
// import Sound from '../../assets/compress.mp3';
// import s from './player.module.scss';
// import PlayDirectionIcon from '../../assets/play-direction.svg?react';
// import PauseIcon from '../../assets/pause.svg?react';
// import PlayIcon from '../../assets/play.svg?react';
// import songCover from '../../assets/song-cover.png';
// import { Slider } from '../slider/slider.tsx';
//
// export const Player = () => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [play, { pause, duration, sound }] = useSound(Sound);
//   const [currTime, setCurrTime] = useState(0);
//
//   const isDraggingRef = useRef(false);
//   console.log('isDraggingRef', isDraggingRef.current);
//
//   console.log('currTime', currTime);
//
//   const handlePlayingButtonClick = () => {
//     if (isPlaying) {
//       pause();
//       setIsPlaying(false);
//     } else {
//       play();
//       setIsPlaying(true);
//     }
//   };
//
//   useEffect(() => {
//     console.log('useEffect');
//     if (!isPlaying || !sound || isDraggingRef.current) return;
//
//     const interval = setInterval(() => {
//       console.log('setInterval');
//       setCurrTime(sound.seek([]));
//     }, 1000);
//
//     return () => {
//       console.log('clearInterval');
//       clearInterval(interval);
//     };
//   }, [isPlaying, sound, isDraggingRef.current]);
//
//   const tempSetStartSong = () => {
//     sound.seek([0]);
//   };
//
//   return (
//     <div className={s.player}>
//       <div className={s.slider}>
//         <Slider
//           key={!isDraggingRef.current ? currTime : 'slider'}
//           rootProps={{
//             max: duration ? duration / 1000 : undefined,
//             defaultValue: [currTime],
//             onValueCommit: (value) => {
//               sound.seek([value[0]]);
//               setCurrTime(value[0]);
//               // setIsDragging(false);
//               isDraggingRef.current = false;
//             },
//             onValueChange: () => {
//               console.log('onValueChange');
//               // setIsDragging(true);
//               isDraggingRef.current = true;
//             },
//           }}
//         />
//       </div>
//       <div className={s.playerWithoutSlider}>
//         <img src={songCover} alt='Обложка песни' className={s.cover} />
//         <div className={s.playerWithoutCover}>
//           <div className={s.songInfo}>
//             <span className={s.songTitle}>Chaff & Dust</span>
//             <span className={s.author}>HYONNA</span>
//           </div>
//           <div className={s.controlPanel}>
//             <button onClick={tempSetStartSong}>
//               <PlayDirectionIcon />
//             </button>
//             <button onClick={handlePlayingButtonClick} className={s.btnPlay}>
//               {isPlaying ? <PauseIcon /> : <PlayIcon />}
//             </button>
//             <button className={s.btnNext} onClick={tempSetStartSong}>
//               <PlayDirectionIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import useSound from 'use-sound';
import { useEffect, useRef, useState } from 'react';
import Sound from '../../assets/compress.mp3';
import s from './player.module.scss';
import PlayDirectionIcon from '../../assets/play-direction.svg?react';
import PauseIcon from '../../assets/pause.svg?react';
import PlayIcon from '../../assets/play.svg?react';
import songCover from '../../assets/song-cover.png';
import { Slider } from '../slider/slider.tsx';

export const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(Sound);
  const [currTime, setCurrTime] = useState(0);

  const isDraggingRef = useRef(false);

  const handlePlayingButtonClick = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    if (!isPlaying || !sound || isDraggingRef.current) return;

    const interval = setInterval(() => {
      setCurrTime(sound.seek([]));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying, sound, isDraggingRef.current]);

  const tempSetStartSong = () => {
    sound.seek([0]);
  };

  return (
    <div className={s.player}>
      <div className={s.slider}>
        <Slider
          key={!isDraggingRef.current ? currTime : 'slider'}
          rootProps={{
            max: duration ? duration / 1000 : undefined,
            defaultValue: [currTime],
            onValueCommit: (value) => {
              sound.seek([value[0]]);
              setCurrTime(value[0]);
              isDraggingRef.current = false;
            },
            onValueChange: () => {
              isDraggingRef.current = true;
            },
          }}
        />
      </div>
      <div className={s.playerWithoutSlider}>
        <img src={songCover} alt='Обложка песни' className={s.cover} />
        <div className={s.playerWithoutCover}>
          <div className={s.songInfo}>
            <span className={s.songTitle}>Chaff & Dust</span>
            <span className={s.author}>HYONNA</span>
          </div>
          <div className={s.controlPanel}>
            <button onClick={tempSetStartSong} aria-label={'Предыдущий трек'}>
              <PlayDirectionIcon />
            </button>
            <button
              onClick={handlePlayingButtonClick}
              className={s.btnPlay}
              aria-label={isPlaying ? 'Пауза' : 'Слушать'}
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <button className={s.btnNext} onClick={tempSetStartSong} aria-label={'Следующий трек'}>
              <PlayDirectionIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
