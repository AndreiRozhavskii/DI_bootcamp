
class Video {
    
    constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
    }
    
    watch() {
    console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
    }

    let video1 = new Video("How to code in JavaScript", "Alice", 300);
    video1.watch(); 
    
    let video2 = new Video("The history of programming languages", "Bob", 600);
    video2.watch(); 
    
    let videoData = [
    { title: "book1", uploader: "Alice", time: 300 },
    { title: "book2", uploader: "Dan", time: 600 },
    { title: "book3", uploader: "Moshe", time: 400 },
    { title: "book4", uploader: "Ziv", time: 500 },
    { title: "book5", uploader: "Adam", time: 450 },
    ];
    
    let videos = videoData.map(
    (data) => new Video(data.title, data.uploader, data.time)
    );

    console.log(videos);