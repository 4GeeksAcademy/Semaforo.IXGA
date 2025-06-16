import React, { useState } from "react";

const Home = () => {
    const [luzActiva, setLuzActiva] = useState(null);

    return (
        <div className="semaforo">
            <div
                clas
                
                sName={`semaforo-rojo${luzActiva === "rojo" ? " activo" : ""}`}
                onClick={() => setLuzActiva("rojo")}
            ></div>
            <div
                className={`semaforo-amarillo${luzActiva === "amarillo" ? " activo" : ""}`}
                onClick={() => setLuzActiva("amarillo")}
            ></div>
            <div
                className={`semaforo-verde${luzActiva === "verde" ? " activo" : ""}`}
                onClick={() => setLuzActiva("verde")}
            ></div>
        </div>
    );
};

export default Home;