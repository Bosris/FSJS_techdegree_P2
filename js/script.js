/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

//global variables to manipulate
const page = document.querySelector('.page');
const pageHeader = document.querySelector('.page-header');
const studentList = document.querySelectorAll('.student-item');



// gets the student list and the total of pages
const showPage = (list, page) => {
   //gets first student and last student of each page
   const firstStudent = (page * 10) - 10;
   const lastStudent = (page * 10) - 1;

   //displays students only between the firststudent and laststudent
   for (let i = 0; i < list.length; i++){
      if ( i >= firstStudent && i <= lastStudent ){
            list[i].style.display = 'block';
         } else {
           list[i].style.display = 'none';
      }
   }
};


//Creates the page links
const appendPageLinks = (studentList) => {
   // gets how many pages is needed and rounds it up
   const pages = Math.ceil(studentList.length / 10);
   const div = document.createElement('div');
   const ul = document.createElement('ul');
   div.className = "pagination";
   page.appendChild(div);
   div.appendChild(ul);

   //for each page create an a tag link
   for (let i = 0; i < pages; i++){
      const li = document.createElement('li');
      const a = document.createElement('a');
      const links = document.getElementsByTagName('a');
      a.textContent = i + 1;
      a.href = "#";
      ul.appendChild(li);
      li.appendChild(a);
      links[0].className = "active";
      //for each click remove the active class on all a tags, then add active class on current click event target
      a.addEventListener('click', (e) => {
         for (let i = 0; i < links.length; i++) {
            if (links[i].className == "active"){
               links[i].classList.remove('active');
            } 
            e.target.className = 'active';
         }
         showPage(studentList, e.target.innerHTML);
      });
   }
};


appendPageLinks(studentList);
showPage(studentList, 1);