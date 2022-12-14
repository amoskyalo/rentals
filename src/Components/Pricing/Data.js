import pay from '../../Assets/Steps/pay.png';
import dash from '../../Assets/Steps/dash.png';
import plan from '../../Assets/Steps/plan.png'

export const data = [
    {
        name: "Basic",
        category: "individual",
        price: 2.5,
        original: 3,
        description: "Includes rent due reminder messages to tenants and registration of up to two plots"
    },
    {
        name: "Pro",
        category: "individual",
        price: 3.3,
        original: 4.2,
        description: "Includes rent due reminder messages to tenants and registration of up to five plots"
    },
    {
        name: "Premium",
        category: "sacco",
        price: 7.35,
        original: 10.5,
        description: "Package includes rent due reminder messages to tenants and registration of up to ten plots"
    },
    {
        name: "VIP",
        category: "sacco",
        price: 14.99,
        original: 20,
        description: "Rent due reminder messages to tenants, unlimited plots plus free property listing at Qwarqo"
    },

]

export const steps = [
    {
        img: plan,
        step:"Choose your plan",
        desc:"Choose the best plan for yourself. We have a range of plan which we beleive can suit you and your need"
    },
    {
        img:pay,
        step:"Pay for your plan",
        desc:"After choosing your plan, you can proceed to pay. We accept different payment methods, and you can always use the one available for you"
    },
    {
        img: dash,
        step:"Start enjoying our services",
        desc:"After you payment has been confirmed, you will be send a link to activate your account. After successful activation, you can now start managing your rentals at your convenient"
    }
]