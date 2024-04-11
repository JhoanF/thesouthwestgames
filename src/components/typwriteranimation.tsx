import React, { useState, useEffect } from 'react';

type TypewriterAnimationProps = {
    words: string[];
};

function TypewriterAnimation({ words }: TypewriterAnimationProps) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (charIndex < words[wordIndex].length) {
                setText((prevText) => prevText + words[wordIndex].charAt(charIndex));
                setCharIndex((prevCharIndex) => prevCharIndex + 1);
            } else if (wordIndex < words.length - 1) {
                setWordIndex((prevWordIndex) => prevWordIndex + 1);
                setCharIndex(0);
            } else {
                clearInterval(interval);
            }
        }, 100); // Adjust the typing speed here (in milliseconds)

        return () => {
            clearInterval(interval);
        };
    }, [words, wordIndex, charIndex]);

    return (
        <div className="text-center">
            <p className="typewriter">{text}</p>
        </div>
    );
}

export default TypewriterAnimation;
