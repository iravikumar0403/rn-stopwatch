import {useEffect, useState} from 'react';
import Sound from 'react-native-sound';
Sound.setCategory('Playback');

const useSound = file => {
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const whoosh = new Sound(file, Sound.MAIN_BUNDLE, error => {
      if (error) {
        return;
      }
    });
    setSound(whoosh);
  }, [file]);

  return sound;
};

export default useSound;
