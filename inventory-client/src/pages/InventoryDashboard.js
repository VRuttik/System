import React from "react";
import './InventoryDashboard.css';

const InventoryDashboard = () => {
    return (
        <div class="container" >
            <h1>Select Type of Inventory </h1>
            <div class="row">
                <div class="col-md">
                    <div class="button-3">
                        <div class="eff-3"></div>
                        <a href="index1.html"> Inventory1</a>
                    </div>
                </div>

                <div class="col-md">
                    <div class="button-3">
                        <div class="eff-3"></div>
                        <a href="index2.html"> Inventory2 </a>
                    </div>
                </div>

                <div class="col-md">
                    <div class="button-3">
                        <div class="eff-3"></div>
                        <a href="index10.html"> Inventory3</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default InventoryDashboard;