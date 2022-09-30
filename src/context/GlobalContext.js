import {createContext, useContext} from 'react';

const initialState = {
    projects: [
        {id: "1", title: "School Page",description: "This website was made for a private school, so it does not have a database, it is only the design, made with html, css, javascript and jquery.", portada: "/ceuldp/ceuldp1.png", images: ["/ceuldp/ceuldp1.png", "/ceuldp/ceuldp2.png", "/ceuldp/ceuldp3.png", "/ceuldp/ceuldp4.png", "/ceuldp/ceuldp5.png"], languages: ["HTML", "CSS","Javascript", "jQuery"], websiteUrl: "https://ce-uldp.com/", githubUrl: "" },
        {id: "2", title: "DroneCam",description: "This website was made to practice my knowledge in HTML, CSS and Javascript.", portada: "/dronecam/dronecam1.png", images: ["/dronecam/dronecam1.png","/dronecam/dronecam2.png", "/dronecam/dronecam3.png", "/dronecam/dronecam4.png", "/dronecam/dronecam5.png", "/dronecam/dronecam6.png"], languages: ["HTML", "CSS","Javascript", "jQuery"], websiteUrl: "", githubUrl: "" },
        {id: "3", title: "Imprenta Design",description: "This website was made to practice my knowledge in HTML, CSS and Javascript.", portada: "/imprenta/imprenta1.png", images: ["/imprenta/imprenta1.png", "/imprenta/imprenta2.png", "/imprenta/imprenta3.png", "/imprenta/imprenta4.png", "/imprenta/imprenta5.png"], languages: ["HTML", "CSS","Javascript"], websiteUrl: "", githubUrl: "" },
        {id: "4", title: "Veterinaria Design",description: "This website was made to practice my knowledge in HTML, CSS and Javascript,", portada: "/veterinaria/veterinaria1.png", images: ["/veterinaria/veterinaria1.png", "/veterinaria/veterinaria2.png", "/veterinaria/veterinaria3.png", "/veterinaria/veterinaria4.png"], languages: ["HTML", "CSS","Javascript"], websiteUrl: "", githubUrl: "" },
        {id: "5", title: "React LocalStorage Crud Tasks",description: "This website was made to practice my knowledge in HTML, CSS and Javascript, React  Js, with useContext, Reducer and localStorage, also i used react hooks to practice the new features of react js, i used also taildwind CSS to design the frontend quickly, this website is about creating, editing, deleting tasks, and save the tasks in LocalStorage to keep the information on website even if the user reload the website.", portada: "/merncrud/merncrud1.png", images: ["/merncrud/merncrud1.png", "/merncrud/merncrud2.png", "/merncrud/merncrud3.png"], languages: ["HTML", "CSS","Javascript", "TailwindCSS", "React JS", "Node js", "Mongo DB"], websiteUrl: "", githubUrl: "https://github.com/LushoKratz/react-localStorage-context-crud" },
        {id: "6", title: "Mern Jwt Crud",description: "This website was made to practice my knowledge in HTML, CSS and Javascript, React  Js, with useContext, Reducer and localStorage, also i used react hooks to practice the new features of react js, i used also taildwind CSS to design the frontend quickly, also i used node js for backend and mongodb to database, to save the information, the website is about creating, deleting and editing posts or tasks, but the user will need to login to create posts or tasks, so thats why i used JWT(Json Web Token) to login user in website and save his own tasks.", portada: "/mernjwt/mernjwt1.png", images: ["/mernjwt/mernjwt1.png", "/mernjwt/mernjwt2.png", "/mernjwt/mernjwt3.png"], languages: ["HTML", "CSS","Javascript", "Bootstrsap CSS", "React js", "Node js", "MongoDB"], websiteUrl: "", githubUrl: "https://github.com/LushoKratz/mern-jwt-context-posts" },
        {id: "7", title: "T-Shirts page deisgn",description: "This website was made to practice my knowledge in HTML, CSS and Javascript.", portada: "/ostore/ostore1.png", images: ["/ostore/ostore1.png", "/ostore/ostore3.png","/ostore/ostore2.png"], languages: ["HTML", "CSS","Javascript"], websiteUrl: "", githubUrl: "" },
        {id: "8", title: "Marvel Api",description: "Consuming Marvel api in react, using different methods provided by api, like get characters, search characters and get a character and his own info by id, this website was made to practice my knowledge in HTML, CSS and Javascript, React Js, using react hooks to practice the new features of react js, i used also taildwind CSS to design the frontend quickly.", portada: "/marvel/marvel1.png", images: ["/marvel/marvel1.png","/marvel/marvel2.png","/marvel/marvel3.png"], languages: ["HTML", "CSS","Javascript", "TailwindCSS", "React js"], websiteUrl: "", githubUrl: "https://github.com/LushoKratz/react-marvel-api" },
        {id: "9", title: "Rick y morty Api",description: "Consuming rick and morty api in react, using different methods provided by api, like get characters, search characters and get a character and his own info by id, this website was made to practice my knowledge in HTML, CSS and Javascript, React Js, using react hooks to practice the new features of react js, i used also taildwind CSS to design the frontend quickly.", portada: "/rick/rick1.png", images: ["/rick/rick1.png"], languages: ["HTML", "CSS","Javascript", "MaterializeCSS", "React js"], websiteUrl: "", githubUrl: "https://github.com/LushoKratz/react-rickymorty-api" }
    ]
}


export const GlobalContext = createContext(initialState);

export const useProjectsContext = () => {
    const context = useContext(GlobalContext);
    return context;
}

export const ContextProvider = ({children}) => {
    const projects = initialState;


    return <GlobalContext.Provider value={{projects}}>
        {children}
    </GlobalContext.Provider>
}