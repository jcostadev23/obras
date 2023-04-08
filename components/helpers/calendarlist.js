
import FormatTime from "../../components/helpers/formattime";

export default function CalendarList({ props, children }) {
    return (<card>
        <div className="items-center justify-center">
            <h1 className="text-xl text-center justify-center font-bold mb-4">{props.day}</h1>
            <h2 className="text-black  text-center font-semibold text-base mb-2"> People: {props.people.name}</h2>
            <h3 className="text-black  text-center font-semibold text-base mb-2">{props.workerTimeMinutes && <div>Hours: {FormatTime(props.workerTimeMinutes)}</div>}</h3>
            <h4 className="text-black  text-center font-semibold text-base mb-2">  {props.job && <div>Job: {props.job.name}</div>}</h4>
            <h5 className="text-black  text-center font-semibold text-base mb-2">  {props.equipement && <div>Equipement: {props.equipement.name}</div>}</h5>
            {/* need to do something to resole when is not hours selected */}
            <h6 className="text-black  text-center font-semibold text-base mb-2">  {props.equipmentTimeMinutes && <div>Equipement Hours: {FormatTime(props.equipmentTimeMinutes)}</div>}</h6>
            {children}
        </div></card>
    );
};