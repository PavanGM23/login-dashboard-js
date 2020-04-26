import React from 'react';

class DashboardView extends React.Component {

    render (){
        return (
            <div>
                <h1>Dashboard</h1>
            <h1> user ${this.props.user}</h1>
            </div>
        );
    }
}

export default DashboardView;