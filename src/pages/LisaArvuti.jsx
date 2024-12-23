import { useState } from "react";

function LisaArvuti() { // see on komponendi nimi ja tähistuse algus
    const [message, setMessage] = useState("Lisa arvuti!"); //Komponendi (lehe) üleval osas luuakse muutujad, näiteks useState:
    const [n2itaNuppu, uuendaN2itaNuppu] = useState (true); //Neil on kõigil „const“ eesliides ning kandiliste sulgude vahel on:
                                                            //vasakul pool muutuja, mis sisestatakse HTMLi loogeliste sulgude vahele
                                                            //paremal pool funktsioon, mida kutsutakse klikkides HTMLs või funktsioonis JavaScriptis välja. See kutsutakse välja alati nii, et tema nime lõppu pannakse sulud ja selle sisse uus väärtus
                                                             //useState() sulgude sees on algväärtus – pärast refreshi või URLi vahetades ning tagasi tulles.
    function addProduct(){    //Komponendi muutujate all on funktsioonid, mis pannakse HTML-s käima nupuvajutusega:
      setMessage("Arvuti lisatud");   //Need funktsioonid käivitatakse HTML-s onClick järgselt, kui sama nimetus välja kutsutakse. 
                                      //Käivitub alati blokk, mis on loogelisest sulust loogelise suluni.
      uuendaN2itaNuppu(false);

    } //Return osa sees on alati HTML, mida kuvatakse välja sellel lehel. See peab kindlasti olema üks komplekt (algama ja lõppema sama elemendiga)
  return (
    <div>
        <div>Sõnum: {message}</div>
        <label>Mark</label> <br />
        <input type="text" /> <br />
        <label>Mudel</label> <br />
        <input type="text" /> <br />
        <label>Maksumus</label> <br />
        <input type="number" /> <br />
        { n2itaNuppu === true &&<button onClick={() => addProduct()}>Sisesta</button>}
    </div> //Funktsiooni sisesene blokk kutsub välja omakorda ülemised funktsioonid.
    //Funktsioon millega käivitatakse, käib alati <button   SIIN   >  NUPU KIRI     </button> ehk nupu avanemise kolmnurkade sees
  )
} //Komponent algab loogelisest sulust ja lõppeb loogelise suluga:

export default LisaArvuti  //Export järel pannakse komponendi nimi. Kõik failid on vaja Reactis exportida, sest neid on vaja ka importida.