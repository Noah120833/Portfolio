document.addEventListener('DOMContentLoaded', () => {
   console.log('JS funktioniert');
   darkmode = false;

   // Definiere alle relevanten HTML-Elemente
   let maintainer = document.getElementById('maintainer');
   let mode = document.getElementById('mode');
   let image = document.getElementById('image');
   let texts = document.getElementById('texts');
   let name = document.getElementById('name');
   let adversitesment1 = document.getElementById('adversitesment1');
   let adversitesment2 = document.getElementById('adversitesment2');
   let decription1 = document.getElementById('decription1');

   let resumebtn = document.getElementById('resumebtn');
   let title = document.getElementById('title');
   let icon = document.getElementById('icon');

   let icons = document.getElementById('icons');
   let icon1 = document.getElementById('icon1');
   let icon2 = document.getElementById('icon2');
   let icon3 = document.getElementById('icon3');
   let icon4 = document.getElementById('icon4');

   let aboutContainer = document.getElementById('aboutcontainer');
   let heading = document.getElementById('heading');
   let location = document.getElementById('location');
   let country = document.getElementById('country');
   let located = document.getElementById('located');
   let about = document.getElementById('about');

   let languages = document.getElementById('languages');
   let heading2 = document.getElementById('heading2');
   let html = document.getElementById('html');
   let hicon = document.getElementById('hicon');
   let htext = document.getElementById('htext');
   let css = document.getElementById('css');
   let cicon = document.getElementById('cicon');
   let ctext = document.getElementById('ctext');
   let js = document.getElementById('js');
   let jicon = document.getElementById('jicon');
   let jtext = document.getElementById('jtext');

   let projects = document.getElementById('projects');
   let heading3 = document.getElementById('heading3');
   let project1 = document.getElementById('project1');
   let p1text = document.getElementById('p1text');
   let project2 = document.getElementById('project2');
   let p2text = document.getElementById('p2text');
   let project3 = document.getElementById('project3');
   let p3text = document.getElementById('p3text');
   let project4 = document.getElementById('project4');
   let p4text = document.getElementById('p4text');
   let particleContainer = document.getElementById('particle-container');
   let cheading = document.getElementById("cheading")
   let Clients = document.getElementById("Clients")
   let name1 = document.getElementById("name1")
   let name2 = document.getElementById("name2")
   let text = document.getElementById("text") // Korrigiert: text statt text1
   let text2 = document.getElementById("text2")
   let line = document.getElementById("line")
   let review1 = document.getElementById("review1")
   let review2 = document.getElementById("review2")

   console.log('Alle Elemente wurden definiert.');



   

   mode.addEventListener('click', () => {
      for (let i = 0; i < 20; i++) { // Generate 20 particles
         const particle = document.createElement('div');
         particle.className = 'particle';

         // Randomize particle direction and position
         const x = (Math.random() - 0.5) * 200; // Random X direction
         const y = (Math.random() - 0.5) * 200; // Random Y direction
         particle.style.setProperty('--x', x);
         particle.style.setProperty('--y', y);

         // Set the initial position near the button
         const rect = mode.getBoundingClientRect();
         particle.style.left = `${rect.left + rect.width / 2}px`;
         particle.style.top = `${rect.top + rect.height / 2}px`;

         // Add the particle to the container
         particleContainer.appendChild(particle);

         // Remove the particle after the animation ends
         particle.addEventListener('animationend', () => {
            particle.remove();
         });
      }
   });

   


   // Dark Mode Toggle
   mode.addEventListener('click', () => {
      if (!darkmode) {

      
      document.body.classList.toggle('dark-mode');
      document.body.style.backgroundColor = '#18171A'; // Hintergrundfarbe ändern
      document.body.style.color = '#FFFFFF'; // Textfarbe ändern

      // Passe spezifische Elemente an
      maintainer.style.backgroundColor = '#18171A';
      maintainer.style.borderColor=" #BD5BFF";
      maintainer.style.borderWidth="1px";
       maintainer.style.boxShadow = '0px 4px 10px rgba(255, 255, 255, 0.2)';
      aboutContainer.style.backgroundColor = '#272727';
      languages.style.backgroundColor = '#272727';
      adversitesment2.style.color = 'white';
      decription1.style.color = 'lightgrey';
      mode.style.color = '#9900FF';
      location.style.borderColor = "white";
      Clients.style.background = 'transparent';
      review1.style.boxShadow = '0px 0px 30px 8px rgba(189, 91, 255, 0.5)';
      review2.style.boxShadow = '0px 0px 30px 8px rgba(189, 91, 255, 0.5)';
      review1.style.borderColor=" #BD5BFF";
      review2.style.borderColor=" #BD5BFF";
      review1.style.background = '#272727';
      review2.style.background = '#272727';
      

      // Buttons und Texte anpassen
      [title,icon, p1text, p2text, located, country, location, about, heading2, htext, ctext, jtext, heading3, cheading, text, text2, line, name1, name2 ].forEach((el) => {
         if (el) el.style.color = '#FFFFFF';
       
      });

      console.log('Dark Mode aktiviert.');
      darkmode = true;
      } else {
         document.body.classList.toggle('dark-mode');
         document.body.style.backgroundColor = '';
         document.body.style.color = '';

         // Entferne alle Inline-Stile der spezifischen Elemente
         [maintainer, aboutContainer, languages, adversitesment2, decription1, mode, location, Clients, line].forEach((el) => {
            if (el) el.removeAttribute('style');
         });

         // Entferne Inline-Stile von Buttons und Texten (alle, die oben gesetzt wurden)
         [title, icon, p1text, p2text, located, country, location, about, heading2, htext, ctext, jtext, heading3, cheading, text, text2, name1, name2].forEach((el) => {
            if (el) el.removeAttribute('style');
         });

         darkmode = false;
      }
   });

   resumebtn.addEventListener('click', () => { 
   alert("coming soon");
   console.log('Resume Button clicked');
   });

  icon1.addEventListener('click', () => { 
   alert("Transferring to GitHub");
   window.open("https://github.com/Noah120833", "_blank");
});

icon2.addEventListener('click', () => { 
   alert("Writint to you via Email");
   window.open("mailto:jonnykaeptain@gmail.com", "_blank");  // Hier kannst du die gewünschte URL angeben.
});

icon3.addEventListener('click', () => { 
   alert("Transferring to LinkedIn");
   window.open("https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit", "_blank");
});

icon4.addEventListener('click', () => { 
   alert("Transferring to Instagram");
   window.open("https://www.instagram.com/noah120945/", "_blank");
});

project2.addEventListener('click', () => { 
   alert("Transferring to Project 1");
   console.log('Project 2 clicked');
   window.open("https://noah120833.github.io/Snorlax-Timer/index.html.html", "_blank");
});

project1.addEventListener('click', () => { 
   alert("Transferring to Project 1");
   console.log('Project 1 clicked');
   window.open("https://noah120833.github.io/Typewave/Typewave/index.html", "_blank");
});

project3.addEventListener('click', () => { 
   alert("Transferring to Project 3");
   console.log('Project 3 clicked');
   window.open("https://noah120833.github.io/Dropdeck/Dropdeckpage/index.html", "_blank");
});

project4.addEventListener('click', () => { 
   alert("Transferring to Project 4");
   console.log('Project 4 clicked');
   window.open("", "_blank");
});


});
