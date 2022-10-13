export class Theme {
    static bgColor = "bg-zinc-100";

    static textPrimaryColor = "text-[#333]";
    static textHoverPrimaryColor = "hover:text-[#008b8b]";
    static bgPrimaryColor = "bg-[#333]";

    static textSoftPrimaryColor = "text-zinc-500";

    static textSecondaryColor = "text-[#008b8b]";
    static textHoverSecondaryColor = "hover:text-[#56c1c0]";
    static bgSecondaryColor = "bg-[#008b8b]";
    static bgHoverSecondaryColor = "hover:bg-[#56c1c0]";

    static cardClass = `${Theme.bgPrimaryColor} flex flex-col justify-around items-center rounded-md shadow-2xl shadow-black`;
    static cardHeaderClass = `${Theme.textPrimaryColor} my-4 p-3 w-max whitespace-nowrap text-2xl text-center`;
}