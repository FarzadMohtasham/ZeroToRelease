import {JSX, useState} from 'react'
import styles from './PricingPlans.module.scss'
import ProjectBased from './../components/Plans/ProjectBased.tsx'
import Subscription from "../components/Plans/Subscription.tsx";
import PlansCTA from "../components/Plans/PlansCTA.tsx";
import {subscriptionPricingData, planOptions} from "../data/subscriptionPricing.data.ts";
import {SubscriptionPricing} from "../interface/Subscription.interface.ts";
import maizeIcon from '/icons/tick-maize.svg'
import {ProjectBasedPricingData} from "../data/subscriptionPricing.data.ts";


const tabsValue = ['Subscription', 'ProjectBased']

export default function PricingPlans(): JSX.Element {
    const [selectedTab, setSelectedTab] = useState(tabsValue[0])

    return (
        <section className={`${styles.pricingPlans} responsive-container x-padding-on-mobile`}>
            <h2>Pricing Plans</h2>
            <p>Fast turnaround. No surprises. Cancel anytime.</p>

            <div className="tab-options">
                <button className={`tab-btn subscription ${selectedTab === tabsValue[0] ? 'selected' : 'not-selected'}`}
                        onClick={() => setSelectedTab(tabsValue[0])}>
                    {tabsValue[0]}
                </button>
                <button
                    className={`tab-btn project-based ${selectedTab === tabsValue[1] ? 'selected' : 'not-selected'}`}
                    onClick={() => setSelectedTab(tabsValue[1])}>
                    {tabsValue[1]}
                </button>
            </div>

            <div className={'tab-content'}>
                {
                    selectedTab === tabsValue[0] &&
                    <div className={'subscriptions'}>
                        <div className={'options-wrapper'}>
                            {
                                subscriptionPricingData.map((data: SubscriptionPricing, index: number): JSX.Element => {
                                    const {
                                        color,
                                        title,
                                        price,
                                        ctaText,
                                        ctaLink,
                                        options,
                                        desc
                                    } = data

                                    return (
                                        <Subscription color={color}
                                                      title={title}
                                                      price={price}
                                                      options={options}
                                                      desc={desc}
                                                      ctaLink={ctaLink}
                                                      ctaText={ctaText}
                                                      key={'subscription_' + index}/>
                                    )
                                })
                            }
                        </div>

                        <div className={'info-wrapper'}>
                            <div className={'plans-info'}>
                                <h6 className={'title'}>ALL PLANS INCLUDE:</h6>
                                <ul className={'info-options'}>
                                    {
                                        planOptions.map((option, index): JSX.Element => {
                                            return (
                                                <li key={option + index}>
                                                    <img src={maizeIcon}
                                                         width={15}
                                                         alt=""/>
                                                    &nbsp;&nbsp;
                                                    {option}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                }

                {
                    selectedTab === tabsValue[1] &&
                    <div className={'project-based-prices'}>
                        {
                            ProjectBasedPricingData.map((project, index) => {
                                return <ProjectBased color={project.color}
                                                     appType={project.appType}
                                                     price={project.price}
                                                     options={project.options}
                                                     key={project.appType + index}/>
                            })
                        }
                    </div>
                }
                <PlansCTA/>
            </div>
        </section>
    )
}