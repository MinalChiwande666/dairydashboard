import BadgeIcon from '@mui/icons-material/Badge';
import InventoryIcon from '@mui/icons-material/Inventory';
import { MdAccountCircle } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { GiMilkCarton } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { SlBookOpen } from "react-icons/sl";
import { BsListCheck } from "react-icons/bs";
import { TbReportMoney } from "react-icons/tb";

export const dashboardDummyData = [
    {
        title: "Account Master",
        link: "/accountmaster",
        icon: <MdAccountCircle style={{ fontSize: "40px" }} />
    },
    {
        title: "Customer Master",
        link: "/customermaster",
        icon: <RiCustomerService2Fill style={{ fontSize: "40px" }} />

    },
    {
        title: "Employee Master",
        link: "/employee",
        icon: <BadgeIcon style={{ fontSize: "40px" }} />

    },
    {
        title: "Supplier Master",
        link: "/supplier",
        icon: <InventoryIcon style={{ fontSize: "40px" }} />
    },
    {
        title: "Vendor Master",
        link: "/vendor",
        icon: <AiOutlineShop style={{ fontSize: "40px" }} />
    },
    {
        title: "Chilling Center",
        link: "/chilingcenter",
        icon: <GiMilkCarton style={{ fontSize: "40px" }} />
    },
    {
        title: "Milk Chalan",
        link: "/milkchalan",
        icon: <CgNotes style={{ fontSize: "40px" }} />
    },
    {
        title: "Milk Purchase",
        link: "/milkpurchase",
        icon: <BiPurchaseTagAlt style={{ fontSize: "40px" }} />
    },
    {
        title: "Farmer Passbook",
        link: "/farmerpassbook",
        icon: <SlBookOpen style={{ fontSize: "40px" }} />
    },
    {
        title: "Milk List",
        link: "/milklist",
        icon: <BsListCheck style={{ fontSize: "40px" }} />
    },
    {
        title: "Bill Generation",
        link: "/Billgeneration",
        icon: <TbReportMoney style={{ fontSize: "40px" }} />
    },

]

