import React from 'react';

const About: React.FC = () => {
  const fontstyle = {
    fontFamily: 'Times New Roman',
  };

  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <div className="max-w-3xl p-1 overflow-hidden">
        <p className="leading-relaxed text-lg" style={fontstyle}>
        I am a Master's student in Computer Science at the National University of Defense Technology (NUDT), where my research focuses on long-tail learning and dataset distillation. I received my Bachelor's degree in Engineering, majoring in Computer Science, from the School of Computer and Artificial Intelligence at Southwest Jiaotong University (SWJTU).
        <br></br>
        
        My interests include machine learning and electronic DIY. During my undergraduate years, I worked on several projects involving smart car design and programming, which sparked my lasting passion for embedded systems and hands-on development.
        <br></br>

        If you’re interested in my work or would like to discuss academic ideas or potential collaborations, feel free to contact me at: liuyunjay [AT] gmail [DOT] com.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-2 mt-2">Education</h2>
      <ul
        className="list-disc list-inside text-lg  break-words "
        style={fontstyle}
      >
        <li>
          2024.09 - Present , M.E. in Computer Science,National University of Defense Technology
        </li>
        <li>
          2020.09 - 2024.06, B.E. in Computer Science, Southwest Jiaotong University, 
          <a
            href="https://scai.swjtu.edu.cn/web/download?m=downLoad&fid=f0074670-6ce1-4711-b186-b288e40684b3"
            target="_blank"
            className="ml-2 text-blue-500 hover:underline"
          >Ranked 1st</a>
        </li>
      </ul>
      <h2 className="text-2xl font-bold mt-2 mb-2">Honors and Awards</h2>
      <ul
        className="list-disc list-inside text-lg break-words"
        style={fontstyle}
      >
        <li>2021 & 2022, National Scholarship (0.2%)</li>
        <li>2021 & 2022 & 2023, Merit Students</li>
        <li>2023, National Encouragement Scholarship</li>
        <li>2024, Outstanding Graduates of Sichuan Province</li>
        <li>
          2022, 17th National University Students Intelligent Car Race,
          <a
            href="https://www.bilibili.com/video/BV1zD81ehEYQ/"
            target="_blank"
            className="ml-2 text-blue-500 hover:underline"
          >
            First prize
          </a>
        </li>
        <li>2024, 7th Military Modeling Competition, Second Prize</li>
      </ul>
    </div>
  );
};

export default About;
