import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    height: 100vh;
    padding: 0 0.5rem;
    min-height: 100vh;
    background-color: #888;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerVideo = styled.div `
    width: 50%;
`

export const Video = styled.div `
    width: 640px;
    height: 53px;
    background-color: red;
`
  
export const Conteudo = styled.video `
    margin: 0;
    width: 100%;
    height: 100%;
`
  
export const Controls = styled.div `
    padding: 0;
    margin: 0;
    background-color: tomato;
    height: 3rem;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
`

export const VolumeControl = styled.input `
    width: 70px;
    display: none;
    margin: 0;
    appearance: none;
    -webkit-appearance: none;
    cursor: pointer;
    background-color: #303030;
    transform: translateY(-30%);
    ::-webkit-slider-runnable-track{
        margin-left: 5px;
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: rgba(255,255,255,0.8);
    }
    ::-webkit-slider-thumb{
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: #fff;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3.5px;
        box-shadow:0 0 2px rgba(0,0,0,0.2);
    }
`

export const PlayControls = styled.div `
    display: flex;
    align-items: center;
    background-color: #303030;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    height: 3rem;
    transform: translateY(-10%);
    :hover{
        ${VolumeControl}{
            transition: 1s;
            display: inline;
        }
    }
`
  
export const TimeTotal = styled.div `
    margin-left: 10px;
    color: #fff;
`
  
export const PlayIcon = styled.span `
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
`

export const MuteIcon = styled.span `
    margin-left: 10px;
    color: #fff;
    cursor: pointer;
`

export const TimeContainer = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #303030;
    height: 10px;
    transform: translateY(-35%);
`

export const Time = styled.input `
    margin: 0;
    width: 95%;
    appearance: none;
    -webkit-appearance: none;
    transform: translateY(-30%);
    ::-webkit-slider-runnable-track{
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: rgba(255,255,255,0);
    }
    
    ::-webkit-slider-thumb{
        height: 15px;
        width: 15px;
        border-radius: 50px;
        background: tomato;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -3.5px;
    }
`

export const Canvas = styled.canvas `
    width: 640px;
    height: 360px;
`

export const Images = styled.div `
    display: flex;
    /*grid-template-columns: repeat(5, 1fr);*/
    overflow-x: scroll;
    overflow-y: hidden;
    img{
        margin: 2px;
    }
`

export const Buttons = styled.div `
    width: 400px;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    button{
        border: none;
        color: white;
        padding: 10px;
        border-radius: 8px;
        font-weight: bold;
        text-shadow: 2px 0 0 #000, -2px 0 0 #000, 0 2px 0 #000, 0 -2px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;
    }
`