import React from 'react'
import FAQs from '../../../components/FAQs/FAQs'
import DashboardInterface from '../dashboardInterface'
import Navbar from '../Navbar/Navbar'

function DashboardFaqs() {
    return (
        <div>
            <DashboardInterface>
                <Navbar navlink="true" />
                <FAQs />
            </DashboardInterface>
        </div>
    )
}

export default DashboardFaqs