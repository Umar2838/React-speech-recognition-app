
import "./App.css"
import { FaMicrophone } from "react-icons/fa";
import {FaMicrophoneSlash} from "react-icons/fa"
import { MdContentCopy } from "react-icons/md";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <>
            <div className="container">
                <h2>Speech to Text Converter</h2>
                <br/>
                <p>In this Project I use "ReactSpeachRecognition" Hook which is very easy to use and able to detect what are you saying and write it on clipboard.</p>

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                   <MdContentCopy className="icon" /> {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening} > <FaMicrophone className="icon" /> Start Speaking</button>
                    <button onClick={SpeechRecognition.stopListening}> <FaMicrophoneSlash className="icon" /> Stop Speaking</button>

                </div>

            </div>

        </>
    );
};

export default App;