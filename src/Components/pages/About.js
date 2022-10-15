import React from 'react';

export default function Home() {
  return (
    <div className = "w-50 mx-auto">
      <h1 className ="pb-4 pt-2">About me</h1>
      <article>
            <img class="float" src={"../assets/images/profile-picture.jpg"} alt="Isaac Harris"/>
            <p>Currently an aspiring Full Stack Developer enrolled at the UofU coding bootcamp. I am hoping to further my carrer as a recent Chef to move into Website Development. I have a background with computers in 2D and 3D animation. Looking to further my skills and improve my knowledge with computers and better understand how websites and apps are made. With my freetime I like to do Photography which helps get me outside and into the mountains. </p>
        </article>
    </div>
  );
}