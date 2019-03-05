import styled from "styled-components";

const StyledSidebar = styled.div`
width: 20vw;
border-right: solid 1px #C5BECE;
div { 
    display: flex;
    border: solid 0.4em #8F79C5;
    border-radius: 50%;
    margin: auto;
    width: 15vw;
    height: 20vh;
    margin-top: 3.5em;
    align-items: center;
    justify-content: center;
}

}
`;

const StyledTitle = styled.div`
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai');
font-family: "Baloo Bhai", sans-serif;
font-size: 4em;
text-align: center;
color: #9FA0C3;

`

export {
    StyledSidebar,
    StyledTitle

}