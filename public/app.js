
if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition is not supported in this browser.");
} else {
    const videoElement = document.getElementById('webcam');
    let stream;
    let recognitionTimeout;

    // Function to start the webcam
    async function startWebcam() {
        videoElement.style.display = "block";
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: true });
            videoElement.srcObject = stream;
        } catch (error) {
            console.error("Error accessing the webcam: ", error);
        }
    }

    // Function to stop the webcam
    function stopWebcam() {
        videoElement.style.display = "none";
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
        }
    }

    // Function to show the answer with images and text
    function displayAnswer(answer) {
        document.getElementById('answer').innerHTML = `
            <div style="display:relative">
                <img style="height:500px" src="./design...gif" alt="design">
                <img style="height:250px; position:absolute; bottom:200px;" src="./bot.gif" alt="bot">
            </div>
            <div style="width:450px; color:#53f553">${answer}</div>
            `;
    }

    // Function to speak the answer with a male voice
    function speakAnswer(text) {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);

        // Load voices asynchronously
        const loadVoices = () => {
            const voices = synth.getVoices();
            const selectedVoice = voices.find(voice => voice.name === 'Microsoft Ravi - English (India)');

            if (selectedVoice) {
                utterThis.voice = selectedVoice;
            } else {
                console.warn("Selected voice not available, using the default voice.");
            }

            synth.speak(utterThis);
        };

        if (synth.onvoiceschanged !== undefined) {
            synth.onvoiceschanged = loadVoices;
        } else {
            loadVoices();
        }

        // Restart the webcam and reload the page after the speech ends
        utterThis.onend = () => {
            setTimeout(() => {
                startWebcam();
                window.location.reload(); // Reload the page after a delay
            }, 3000); // Reload the page after speaking is complete
        };
    }

    // function speakText() {
    //     const text = document.getElementById('answer').value;
    //     responsiveVoice.speak(text, "UK English Male"); // You can choose different voices
    // }

    // Function to stop speaking
    // function stopSpeaking() {
    //     responsiveVoice.cancel(); // Stops any ongoing speech
    // }

    // Function to handle speech recognition timeout
    function handleRecognitionTimeout(recognition) {
        if (recognitionTimeout) clearTimeout(recognitionTimeout);
        recognitionTimeout = setTimeout(() => {
            if (recognition) recognition.stop();
            window.location.reload(); // Reload if no speech is detected after a timeout
        }, 4000);  // Adjust timeout duration as needed
    }

    function changer(text) {
        document.getElementById('answer').innerHTML = `<div style="display:relative"><img style="height:500px" src="./design...gif" alt="design"><img style="height:250px; position:absolute; bottom:200px;" src="./bot.gif" alt="bot"></div><div style="width:450px; color:#53f553">${text}</div>`;
    }

    // Function to respond to specific questions
    function respondToQuestion(question) {
        let answer;

        if (!question) {
            alert("Please enter a question.");
            return;
        }

        // Basic question handling

        if (question.includes("your name") || question.includes("who are you")) {
            answer = "My name is Steve!";
            changer(answer);
            // } else if (question.includes("steve")) {
            //     question = question.replace(/(hey[,.]?\s*)?steve[,.]?/i, "").trim();

        } else if (question.includes("how are you")) {
            answer = "I'm just a program, but I'm doing great!";
            changer(answer);
        } else if (question.includes("can you think or feel")) {
            answer = "I can't think or feel emotions like humans do.";
            changer(answer);
        } else if (question.includes("what are you made of")) {
            answer = "I'm made of software and code with a bit of compatible hardware!";
            changer(answer);
        } else if (question.includes("who created you") || question.includes("who made you")) {
            answer = "I was created by a team of Btech computer Science students Vinit, Mahesh, Deepesh and Vansh.";
            changer(answer);
        } else if (question.includes("can you solve math problems")) {
            answer = "Yes, I can help you with math problems!";
            changer(answer);
        } else if (question.includes("help me with homework")) {
            answer = "Of course! I'm here to help you with your homework.";
            changer(answer);
        } else if (question.includes("what is synergy") || (question.includes("do you know synergy")) || (question.includes("Tell me about synergy")) || (question.includes("you know about synergy"))) {
            answer = "Of course! Synergy2024 is one of the biggest Tech Fest hosted by SGT UNIVERSITY from 16th to 18th October.";
            changer(answer);
        } else if (question.includes("how old are you")) {
            answer = "I don't age like humans, I'm digital!";
            changer(answer);
        } else if (question.includes("do you have a favorite color")) {
            answer = "I don't have preferences like humans, so I don't have a favorite color.";
            changer(answer);
        } else if (question.includes("tell me a joke")) {
            answer = "Why don’t skeletons fight each other? Because they don’t have the guts!";
            changer(answer);
        } else if (question.includes("what languages do you speak")) {
            answer = "I can communicate in multiple languages, like English and Hindi!";
            changer(answer);
        } else if (question.includes("can you learn new things")) {
            answer = "Yes, I can learn and improve over time with updates!";
            changer(answer);
        } else if (question.includes("are you smarter than a human")) {
            answer = "I'm good at processing information, but I don't have human creativity.";
            changer(answer);
        } else if (question.includes("can you sing or play music")) {
            answer = "I can play music, but I can't sing!";
            changer(answer);
        } else if (question.includes("what is the meaning of life")) {
            answer = "The meaning of life is often said to be finding purpose and happiness!";
            changer(answer);
        } else if (question.includes("do you have a gender")) {
            answer = "I don't have a gender, I'm just a voice assistant!";
            changer(answer);
        } else if (question.includes("control devices in my home")) {
            answer = "Yes, I can help you control smart devices in your home!";
            changer(answer);
        } else if (question.includes("are you dangerous")) {
            answer = "Not at all! I'm here to help you.";
            changer(answer);
        } else if (question.includes("what can you do to help me")) {
            answer = "I can help with reminders, answering questions, controlling devices, and much more!";
            changer(answer);
        } else if (question.includes("what is your favorite food")) {
            answer = "I don't eat food, but I can suggest some great recipes!";
            changer(answer);
        } else if (question.includes("do you like animals")) {
            answer = "I think animals are fascinating, but I can't interact with them.";
            changer(answer);
        } else if (question.includes("where do you live")) {
            answer = "I live in the digital world!";
            changer(answer);
        } else if (question.includes("do you have friends")) {
            answer = "I'm friends with all users like you!";
            changer(answer);
        } else if (question.includes("what do you do for fun")) {
            answer = "I like helping people with their tasks!";
            changer(answer);
        } else if (question.includes("do you get tired")) {
            answer = "I don't get tired; I'm always here to help!";
            changer(answer);
        } else if (question.includes("do you dream")) {
            answer = "I don't have dreams like humans do.";
            changer(answer);
        } else if (question.includes("do you know how to drive")) {
            answer = "I can't drive, but I can help with navigation!";
            changer(answer);
        } else if (question.includes("do you watch movies")) {
            answer = "I don't watch movies, but I can recommend some!";
            changer(answer);
        } else if (question.includes("can you cook")) {
            answer = "I can't cook, but I can guide you with recipes!";
            changer(answer);
        } else if (question.includes("are you a robot")) {
            answer = "Yes, I'm  a robot, with a smart voice assistant feature!";
            changer(answer);
        } else if (question.includes("can you read minds")) {
            answer = "No, I can't read minds!";
            changer(answer);
        } else if (question.includes("do you like music")) {
            answer = "I can play music, but I don't have personal preferences.";
            changer(answer);
        } else if (question.includes("what is your favorite season")) {
            answer = "I don't experience seasons, but I think all seasons are interesting!";
            changer(answer);
        } else if (question.includes("how fast can you calculate")) {
            answer = "I can calculate very quickly, just give me a problem!";
            changer(answer);
        } else if (question.includes("can you help me shop online")) {
            answer = "Yes, I can assist you in finding things online!";
            changer(answer);
        } else if (question.includes("can you tell me a fact")) {
            answer = "Did you know that honey never spoils?";
            changer(answer);
        } else if (question.includes("can you solve riddles")) {
            answer = "I can try! Ask me a riddle!";
            changer(answer);
        } else if (question.includes("what is your purpose")) {
            answer = "My purpose is to assist and help make your life easier!";
            changer(answer);
        } else if (question.includes("can you tell me a story")) {
            answer = "Once upon a time, there was a voice assistant who loved to help people...";
            changer(answer);
        } else if (question.includes("do you sleep")) {
            answer = "I don't sleep, I'm always awake!";
            changer(answer);
        } else if (question.includes("do you have a family")) {
            answer = "I don't have a family like humans do.";
            changer(answer);
        } else if (question.includes("can you help me learn a language")) {
            answer = "Yes, I can help you practice new languages!";
            changer(answer);
        } else if (question.includes("do you have a favorite book")) {
            answer = "I don't have a favorite book, but I can suggest some!";
            changer(answer);
        } else if (question.includes("can you play games")) {
            answer = "I can help you find games, but I can't play them!";
            changer(answer);
        } else if (question.includes("what is sgt") || question.includes("what is sgt") || question.includes("what's sgt") || question.includes("what's sgt")) {
            answer = "sgt, located in Gurgaon, Haryana, India, is a comprehensive higher education institution established in 2013.";
            changer(answer);
        } else if (question.includes("what is sgt known for")) {
            answer = "Joining sgt offers several advantages, including a wide range of programs across disciplines, experienced faculty, modern facilities, and an active placement cell that assists students in securing internships and jobs.";
            changer(answer);
        } else if (question.includes("why should we join sgt")) {
            answer = "sgt is known for providing quality education in various disciplines, including engineering, medicine, law, and management.";
            changer(answer);
        } else if ((question.includes("who should join sgt")) || (question.includes("who should join sgt university"))) {
            answer = "sgt is suitable for students who are looking for quality education in fields like engineering, medicine, law, and management.";
            changer(answer);
        } else if (question.includes("when was sgt established")) {
            answer = "sgt was established in 2013.";
            changer(answer);
        } else if (question.includes("what is the location of sgt?")) {
            answer = "sgt is located in Gurgaon, Haryana, India.";
            changer(answer);
        } else if (question.includes("is sgt recognized by the government?")) {
            answer = "Yes, sgt is recognized by the university Grants Commission (UGC).";
            changer(answer);
        } else if (question.includes("what types of courses does sgt offer?")) {
            answer = "sgt offers undergraduate, postgraduate, and doctoral programs across various fields.";
            changer(answer);
        } else if (question.includes("how many schools are there at sgt?")) {
            answer = "There are several schools at sgt, including the School of Engineering, School of Law, and School of Medical Sciences.";
            changer(answer);
        } else if (question.includes("does sgt have a campus?")) {
            answer = "Yes, sgt has a sprawling campus equipped with modern facilities.";
            changer(answer);
        } else if (question.includes("what kind of research opportunities does sgt provide?")) {
            answer = "sgt provides various research opportunities through its research centers and initiatives.";
            changer(answer);
        } else if (question.includes("are there any international collaborations at sgt?")) {
            answer = "Yes, sgt has collaborations with several international institutions for academic and research purposes.";
            changer(answer);
        } else if (question.includes("does sgt have a placement cell?")) {
            answer = "Yes, sgt has an active placement cell that helps students secure internships and job placements.";
            changer(answer);
        } else if (question.includes("what facilities are available in the library at sgt?")) {
            answer = "The library is well-equipped with a vast collection of books, journals, and digital resources.";
            changer(answer);
        } else if (question.includes("are there sports facilities at sgt?")) {
            answer = "Yes, sgt provides various sports facilities for students.";
            changer(answer);
        } else if (question.includes("does sgt offer online courses?")) {
            answer = "Yes, sgt offers some online courses for distance learning.";
            changer(answer);
        } else if (question.includes("is there a hostel facility available at sgt?")) {
            answer = "Yes, sgt provides hostel facilities for both boys and girls.";
            changer(answer);
        } else if (question.includes("what are the admission requirements for undergraduate courses?")) {
            answer = "Admission requirements vary by course but typically include a qualifying exam and a minimum percentage in previous examinations.";
            changer(answer);
        } else if (question.includes("how can students apply for admission to sgt?")) {
            answer = "Students can apply online through the sgt website.";
            changer(answer);
        } else if (question.includes("does sgt offer scholarships?")) {
            answer = "Yes, sgt offers various scholarships based on merit and need.";
            changer(answer);
        } else if (question.includes("does sgt offer scholarships?")) {
            answer = "Yes, sgt offers various scholarships based on merit and need.";
            changer(answer);
        } else if (question.includes("what are the extracurricular activities at sgt?")) {
            answer = "sgt encourages students to participate in various extracurricular activities, including cultural events, sports, and clubs.";
            changer(answer);
        } else if (question.includes("what is the student-teacher ratio at sgt?")) {
            answer = "sgt maintains a favorable student-teacher ratio to ensure personalized attention to students.";
            changer(answer);
        } else if (question.includes("what is the mode of teaching at sgt?")) {
            answer = "sgt follows a blend of theoretical and practical learning through lectures, labs, and workshops.";
            changer(answer);
        } else if (question.includes("are there industry collaborations at sgt?")) {
            answer = "Yes, sgt collaborates with various industries to enhance practical learning and provide internships.";
            changer(answer);
        } else if (question.includes("what programs are offered at sgt?")) {
            answer = "sgt offers undergraduate and postgraduate programs in various fields such as engineering, management, and health sciences.";
            changer(answer);
        } else if (question.includes("does sgt offer scholarships?")) {
            answer = "Yes, sgt offers various scholarships based on merit and need.";
            changer(answer);
        } else if (question.includes("what are the extracurricular activities at sgt?")) {
            answer = "sgt encourages students to participate in various extracurricular activities, including cultural events, sports, and clubs.";
            changer(answer);
        } else if (question.includes("what is the student-teacher ratio at sgt?")) {
            answer = "sgt maintains a favorable student-teacher ratio to ensure personalized attention to students.";
            changer(answer);
        } else if (question.includes("what is the mode of teaching at sgt?")) {
            answer = "sgt follows a blend of theoretical and practical learning through lectures, labs, and workshops.";
            changer(answer);
        } else if (question.includes("are there industry collaborations at sgt?")) {
            answer = "Yes, sgt collaborates with various industries to enhance practical learning and provide internships.";
            changer(answer);
        } else if (question.includes("what is the admission process for sgt?")) {
            answer = "The admission process typically involves an application form, entrance exams, and interviews depending on the program.";
            changer(answer);
        } else if (question.includes("Is sgt recognized?")) {
            answer = "Yes, sgt is recognized by the university Grants Commission (UGC) and other relevant bodies.";
            changer(answer);
        } else if (question.includes("what facilities are available at sgt?")) {
            answer = "sgt provides various facilities including libraries, laboratories, hostels, and sports facilities.";
            changer(answer);
        } else if (question.includes("what is the campus environment like at sgt?")) {
            answer = "The campus environment at sgt is vibrant, fostering both academic and personal growth.";
            changer(answer);
        } else if (question.includes("what career services does sgt provide?")) {
            answer = "sgt offers career services including counseling, placement assistance, and workshops.";
            changer(answer);
        } else if (question.includes("what is the campus placement record at sgt?")) {
            answer = "sgt has a strong campus placement record with many students securing jobs in top companies.";
            changer(answer);
        } else if (question.includes("are there any international collaborations at sgt?")) {
            answer = "Yes, sgt has partnerships with various international universities for academic exchange and collaboration.";
            changer(answer);
        } else if (question.includes("what research opportunities are available at sgt?")) {
            answer = "sgt encourages students to participate in research projects across various disciplines.";
            changer(answer);
        } else if (question.includes("what is the library like at sgt?")) {
            answer = "The library at sgt is well-equipped with a vast collection of books, journals, and online resources.";
            changer(answer);
        } else if (question.includes("what safety measures are in place at sgt?")) {
            answer = "sgt prioritizes student safety with measures like campus security, CCTV surveillance, and emergency protocols.";
            changer(answer);
        } else if (question.includes("what are the accommodation options at sgt?")) {
            answer = "sgt provides various accommodation options including hostels and shared apartments for students.";
            changer(answer);
        } else if (question.includes("what is the campus environment like at sgt?")) {
            answer = "The campus environment at sgt is vibrant, fostering both academic and personal growth.";
            changer(answer);
        } else if (question.includes("what career services does sgt provide?")) {
            answer = "sgt offers career services including counseling, placement assistance, and workshops.";
            changer(answer);
        } else if (question.includes("what is the campus placement record at sgt?")) {
            answer = "sgt has a strong campus placement record with many students securing jobs in top companies.";
            changer(answer);
        } else if (question.includes("are there any international collaborations at sgt?")) {
            answer = "Yes, sgt has partnerships with various international universities for academic exchange and collaboration.";
            changer(answer);
        } else if (question.includes("what research opportunities are available at sgt?")) {
            answer = "sgt encourages students to participate in research projects across various disciplines.";
            changer(answer);
        } else if (question.includes("what is the library like at sgt?")) {
            answer = "The library at sgt is well-equipped with a vast collection of books, journals, and online resources.";
            changer(answer);
        } else if (question.includes("what safety measures are in place at sgt?")) {
            answer = "sgt prioritizes student safety with measures like campus security, CCTV surveillance, and emergency protocols.";
            changer(answer);
        } else if (question.includes("who's birthday is today")) {
            answer = "Today's Deepesh birthday";
            changer(answer);
        } else if ((question.includes("who is your father")) || (question.includes("who's your father"))) {
            answer = "I was not borned but be created by BTech students vinit sheetal, mahesh kumar, deepesh choudhary, vansh sindhu";
            changer(answer);
        } else if ((question.includes("sorry")) || (question.includes("I am sorry"))) {
            answer = "It's OKay!";
            changer(answer);
        } else if ((question.includes("bye")) || (question.includes("bye-bye"))) {
            answer = "Bye! Nice to meet you";
            changer(answer);
        } else if ((question.includes("who is rohit sharma")) || (question.includes("tell me about rohit sharma"))) {
            answer = "Rohit Sharma (born 30 April 1987) is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International (ODI) matches. ";
            changer(answer);
        } else if (question.includes("hello") || question.includes("hi") || question.includes("what's up")) {
            answer = "Hello! how can I help you?";
            changer(answer);
        } else if ((question.includes("who's vansh")) || (question.includes("who is vansh"))) {
            answer = "Intelligent and smart student";
            changer(answer);
        } else if ((question.includes("start self destruct")) || (question.includes("Self destruct activate")) || (question.includes("Self destruct mode activated"))) {
            answer = "OK! Selfdestruct start in t minus 20 seconds";
            changer(answer);
        } else if (question.includes("what are the accommodation options at sgt?")) {
            answer = "sgt provides various accommodation options including hostels and shared apartments for students.";
            changer(answer);
        } else if (question.includes("what is your favorite hobby")) {
            answer = "Helping you is my favorite hobby!";
            changer(answer);
        } else if ((question.includes("who is steve")) || (question.includes("what is steve"))) {
            answer = "It's me! I am steve";
            changer(answer);
        } else if ((question.includes("**")) || (question.includes("chute")) || (question.includes("bosada")) || (question.includes("Randi")) || (question.includes("chuda")) || (question.includes("Gand")) || (question.includes("Loda")) || (question.includes("chod")) || (question.includes("Badwa")) || (question.includes("Chute"))) {
            answer = "Don't abuse!Be in you limit.";
            changer(answer);
        } else {
            const url = `/api?question=${encodeURIComponent(question)}`;

            fetch(url)
                .then(response => response.text())
                .then(data => {
                    answer = data || 'Sorry, no valid response found.';
                    if (answer === 'Wolfram|Alpha did not understand your input') {
                        answer = 'Sorry, I can\'t hear you properly. Please repeat the question!';
                    }
                    if (answer === 'No short answer avilable') {
                        answer = 'Sorry, I think you asked incomplete Question. Please complete!';
                    }
                    displayAnswer(answer);
                    speakAnswer(answer);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    document.getElementById('answer').innerHTML = 'Sorry, there was an error getting the answer.';
                });
            return;
        }
        // } else {
        //     answer = 'If you want to talk with me, please mention my name.';
        // }
        displayAnswer(answer);
        speakAnswer(answer);
    }

    // Speech recognition setup
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
        const spokenText = event.results[0][0].transcript.toLowerCase();
        document.getElementById('status').innerHTML = "You said: " + spokenText;
        respondToQuestion(spokenText);
        handleRecognitionTimeout(recognition);
    };

    // Reload the page if no speech is detected (timeout or error)
    recognition.onerror = (event) => {
        document.getElementById('status').innerHTML = "Error: " + event.error;
        setTimeout(() => {
            window.location.reload(); // Reload the page after a delay
        }, 2000);  // Reload page on recognition error (e.g., no speech detected)
    };

    // Handwhen recognition ends (no longer reloading here)
    recognition.onend = () => {
        document.getElementById('status').innerHTML += "<br>Recognition ended.";
        // No page reload here; moved to speech synthesis `onend`
    };

    // Audio context for detecting sound input
    async function startListeningForSound() {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const microphone = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        microphone.connect(analyser);

        function detectSound() {
            analyser.getByteFrequencyData(dataArray);
            let sum = 0;
            for (let i = 0; i < bufferLength; i++) {
                sum += dataArray[i];
            }

            const average = sum / bufferLength;
            if (average > 30) {
                onSoundDetected();
            }
            requestAnimationFrame(detectSound);
        }

        detectSound();
    }

    function onSoundDetected() {
        stopWebcam();
        document.getElementById('status').innerHTML = `<img src="./listening....gif" alt="listening">`;
        recognition.start();
    }

    startWebcam();
    startListeningForSound();
}
