import {SubscriptionPricing} from './../interface/Subscription.interface.ts'
import {ProjectBased} from "../interface/ProjectBased.interface.ts";

export const subscriptionPricingData: SubscriptionPricing[] = [
    {
        color: 'sea-green',
        title: 'Monthly',
        desc: 'per month, Pause or cancel anytime.',
        price: 2999,
        options: ['Unlimited requests','Unlimited projects','Design + development'],
        ctaText: 'Get started',
        ctaLink: '#'
    },
    {
        color: 'heliotrope',
        title: 'Quarterly',
        desc: 'per month, Pause or cancel anytime.',
        price: 2499,
        options: ['Unlimited requests','Unlimited projects','Design + development'],
        ctaText: 'Get started',
        ctaLink: '#'
    },
]

export const ProjectBasedPricingData: ProjectBased[] = [
    {
        color: 'sea-green',
        appType: 'Web/Mobile App',
        price: 12000,
        options: ['Complex platforms', 'SaaS, Edtech, etc', 'Design systems']
    },
    {
        color: 'heliotrope',
        appType: 'Web/Mobile App',
        price: 9000,
        options: ['Complex platforms', 'SaaS, Edtech, etc', 'Design systems']
    },
    {
        color: 'maize',
        appType: 'Web/Mobile App',
        price: 6000,
        options: ['Complex platforms', 'SaaS, Edtech, etc', 'Design systems']
    },
]

export const planOptions: string[] = [
    'Design + NoCode development',
    'Invite unlimited team members',
    'Regular progress updates',
    'Real-time collaboration',
    'No contracts. Cancel any time',
    'Simple project management',
]









