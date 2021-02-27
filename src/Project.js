import React from 'react'
import Projects from './Projects';
import styled from 'styled-components';

const ProjecrContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 110px;
  display: flex;
`;


function Project() {
  return (
    <div>
      <ProjecrContainer>
        <Projects 
          id = "1"
          title='Landing Page'
          description = 'This landing page has been created with HTML & CSS.'
          image={"/images/happyRiding.png"}
        />

        <Projects 
          id = "2"
          title='Portfolio Website'
          description = 'This notebook  is written in vanilla  JavaScript. The text editor library CKEditor 5, was used to develop the notebook'
          image={"/images/portfolio.png"}
        />

        <Projects 
          id = "3"
          title='The Quire Notebook'
          description = 'This notebook  is written in vanilla  JavaScript. The text editor library CKEditor 5, was used to develop the notebook'
          image={"/images/quire.jpg"}
        />
  
    </ProjecrContainer>
    </div>
  )
}
export default Project
