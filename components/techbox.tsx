interface TechboxProps {
    name: string;
    logoUrl: string;
    onSelect?: () => void;
    selected?: boolean;
}
export default function Techbox({ name, logoUrl, onSelect, selected }: TechboxProps) {

    return (
        <div
            className={`flex flex-col justify-center items-center gap-4 w-30 h-30 border rounded-xl cursor-pointer ${selected ? "bg-primary border-primary text-background" : ""}`}
            onClick={onSelect}
        >
            <img src={logoUrl} alt={`${name} logo`} className="w-10 h-10 bg-background rounded-full p-1" />
            <div>
                <h4 className="font-bold">{name}</h4>
            </div>
        </div>
    )
}