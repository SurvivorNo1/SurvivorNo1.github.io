import React from 'react';

const About: React.FC = () => {
  const fontstyle = {
    fontFamily: 'Times New Roman',
  };

  return (
    <div className="flex flex-col flex-1">
      <h2 className="text-2xl font-bold mb-2">About Me</h2>
      <p className="leading-relaxed text-lg" style={fontstyle}>
        I am currently pursuing a Master’s degree in Computer Science at the
        School of Computer Science, National University of Defense Technology
        (NUDT), focusing on machine learning applications. I obtained my Bachelor of Engineering degree in
        Computer Science from the School of Computer and Artificial Intelligence
        at Southwest Jiaotong University (SWJTU).
        <br></br>
        My interests also include high performance computing. If you’re open to
        discussing academic interests or exploring collaboration opportunities,
        please feel free to contact me at liuyunjay AT gmail DOT com.
      </p>
      <h2 className="text-2xl font-bold mb-2 mt-2">Education</h2>
      <ul
        className="list-disc list-inside text-lg  break-words "
        style={fontstyle}
      >
        <li>
          2024.09 - Present, M.E. in Computer Science, National University of Defense Technology(NUDT)
        </li>
        <li>
          2020.09 - 2024.06, B.E. in Computer Science, Southwest Jiaotong University(SWJTU)
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
          2022, the 17th National University Students Intelligent Car Race,
          <a
            href="https://www.bilibili.com/video/BV1zD81ehEYQ/"
            target="_blank"
            className="ml-2 text-blue-500 hover:underline"
          >
            First prize
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
