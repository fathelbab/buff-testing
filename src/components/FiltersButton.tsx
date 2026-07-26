import Button from "../components/Button";
import { VscSettings } from "react-icons/vsc";
import { ChevronDown } from "lucide-react";

export default function FiltersButton() {
    return (
        <Button
            variant="outlined"
            size="md"
            leftIcon={<VscSettings size={22} />}
            rightIcon={<ChevronDown size={20} />}
        >
            Filters
        </Button>
    );
}