import React from "react"
import picture from '../Images/0014.jpg'

export default function Info() {
    return (
        <div className="info">
            <div className="container">
                <h1 className="name">Andrew Buhelos</h1>
                <p className="job-title">Full Stack Developer</p>
                <p className="website"><a href="https://andrewbuhelos.com/" target="_blank">andrewbuhelos.com</a></p>
                <p className="buttons">
                    <a href="mailto:abuhelos3@gmail.com" className="btn">
                        <svg width="13" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M.102 1.707 6.5 4.906l6.398-3.199A1.6 1.6 0 0 0 11.3.2H1.7A1.6 1.6 0 0 0 .102 1.707Z" fill="#1E1F26"/><path d="m12.9 3.494-6.4 3.2-6.4-3.2V8.2a1.6 1.6 0 0 0 1.6 1.6h9.6a1.6 1.6 0 0 0 1.6-1.6V3.494Z" fill="#1E1F26"/></svg>
                        <span>Email</span>
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-buhelos-2022/" target="_blank" className="btn btn--accent">
                        <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.714 1.333H2.283a.956.956 0 0 0-.95.962v11.41c0 .53.426.962.95.962h11.431a.96.96 0 0 0 .953-.962V2.295a.959.959 0 0 0-.953-.962Zm-8.35 11.429H3.386V6.399h1.98v6.363h-.004ZM4.374 5.53a1.146 1.146 0 1 1 .001-2.293 1.146 1.146 0 0 1-.001 2.293Zm8.396 7.232h-1.976V9.667c0-.738-.015-1.688-1.027-1.688-1.03 0-1.188.804-1.188 1.634v3.149H6.604V6.399H8.5v.869h.027c.265-.5.91-1.027 1.872-1.027 2 0 2.372 1.319 2.372 3.033v3.488Z" fill="#fff"/></svg>
                        <span>LinkedIn</span>
                    </a>
                </p>
            </div>
            <img src={picture} alt="Andrew Buhelos" className="avatar" />
        </div>
    )
}