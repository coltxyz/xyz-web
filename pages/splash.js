import Link from 'next/link'
import React from 'react'

export default class Splash extends React.Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
        <div className="splash-outer">
            <div className="splash-links">
                <div className="silver-record">
                    <Link href="/">💿</Link>
                </div>
                <div className="twitter">
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/colt_xyz">
                    <svg viewBox="0 0 193 157" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M192.981 18.758C185.918 21.8875 178.331 24.0021 170.355 24.9579C178.585 20.0334 184.742 12.2828 187.677 3.15233C179.945 7.74512 171.483 10.9779 162.658 12.7103C156.723 6.37382 148.863 2.17392 140.296 0.762634C131.73 -0.648658 122.938 0.807611 115.284 4.90535C107.631 9.00308 101.544 15.513 97.9695 23.4245C94.3949 31.3359 93.5321 40.2062 95.5153 48.6582C79.8478 47.8715 64.5208 43.7993 50.529 36.7057C36.5372 29.6122 24.1933 19.6559 14.2984 7.483C10.9151 13.3192 8.96966 20.0859 8.96966 27.2924C8.96588 33.7799 10.5635 40.168 13.6207 45.89C16.6779 51.612 21.1003 56.4909 26.4953 60.0938C20.2385 59.8947 14.1197 58.2041 8.64824 55.1626V55.6701C8.64761 64.7691 11.795 73.5881 17.5564 80.6306C23.3178 87.6732 31.3383 92.5056 40.257 94.3078C34.4528 95.8786 28.3675 96.11 22.4607 94.9845C24.977 102.814 29.8786 109.66 36.4793 114.565C43.0799 119.47 51.0492 122.188 59.2714 122.339C45.3137 133.296 28.0761 139.239 10.3314 139.213C7.18817 139.214 4.04755 139.03 0.925781 138.663C18.9376 150.244 39.9047 156.39 61.3183 156.367C133.806 156.367 173.433 96.3293 173.433 44.2598C173.433 42.5682 173.391 40.8596 173.315 39.1679C181.023 33.5937 187.677 26.691 192.964 18.7833L192.981 18.758V18.758Z" fill="#1D9BF0"/>
                    </svg>

                    </a>
                </div>
                <div className="discord">
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/eXHsq79P">
                        <svg viewBox="0 0 927 707" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M784.762 58.9237C724.652 31.3377 661.224 11.6492 596.059 0.348838C595.469 0.249409 594.862 0.335283 594.323 0.594654C593.783 0.854026 593.337 1.27416 593.046 1.79727C584.877 16.2817 575.839 35.2272 569.524 50.0592C499.281 39.3992 427.831 39.3992 357.588 50.0592C350.544 33.5366 342.574 17.4238 333.718 1.79727C333.421 1.27988 332.974 0.864595 332.436 0.606057C331.898 0.347519 331.295 0.257849 330.705 0.348838C265.526 11.5887 202.084 31.2875 142.003 58.9237C141.489 59.1199 141.059 59.4885 140.786 59.9665C20.6238 239.515 -12.3426 414.66 3.82194 587.603C3.87988 588.414 4.40132 589.226 5.03863 589.747C75.0112 641.579 153.277 681.153 236.499 706.781C237.087 706.966 237.718 706.959 238.301 706.761C238.885 706.563 239.39 706.185 239.743 705.68C257.588 681.346 273.463 655.68 287.136 628.681C287.421 628.125 287.519 627.492 287.414 626.876C287.31 626.26 287.009 625.694 286.557 625.263C286.258 624.98 285.902 624.763 285.514 624.625C260.552 615.032 236.377 603.506 213.208 590.153C212.561 589.786 212.08 589.184 211.864 588.472C211.648 587.761 211.715 586.993 212.049 586.329C212.246 585.897 212.545 585.52 212.918 585.228C217.785 581.578 222.652 577.754 227.287 573.93C227.696 573.601 228.188 573.389 228.708 573.318C229.229 573.246 229.759 573.318 230.242 573.525C381.98 642.818 546.233 642.818 696.117 573.525C696.618 573.308 697.168 573.231 697.709 573.303C698.249 573.374 698.761 573.591 699.188 573.93C703.823 577.754 708.69 581.578 713.556 585.228C713.951 585.516 714.267 585.898 714.478 586.338C714.689 586.779 714.787 587.265 714.765 587.753C714.742 588.24 714.598 588.715 714.347 589.134C714.095 589.553 713.744 589.903 713.325 590.153C690.209 603.629 666.002 615.141 640.961 624.567C640.561 624.712 640.198 624.943 639.898 625.243C639.598 625.543 639.367 625.906 639.222 626.306C639.089 626.693 639.035 627.103 639.065 627.511C639.095 627.92 639.207 628.318 639.396 628.681C653.301 655.622 669.234 681.346 686.731 705.68C687.085 706.185 687.59 706.563 688.173 706.761C688.757 706.959 689.388 706.966 689.976 706.781C773.337 681.232 851.73 641.653 921.784 589.747C922.135 589.504 922.426 589.185 922.637 588.814C922.847 588.443 922.972 588.029 923 587.603C942.351 387.661 890.613 213.964 785.92 60.0245C785.815 59.7702 785.657 59.5409 785.458 59.3513C785.258 59.1617 785.021 59.016 784.762 58.9237V58.9237ZM309.79 482.273C264.077 482.273 226.476 440.326 226.476 388.878C226.476 337.371 263.382 295.425 309.79 295.425C356.545 295.425 393.799 337.719 393.104 388.878C393.104 440.326 356.198 482.273 309.79 482.273ZM617.786 482.273C572.131 482.273 534.472 440.326 534.472 388.878C534.472 337.371 571.378 295.425 617.786 295.425C664.541 295.425 701.853 337.719 701.1 388.878C701.1 440.326 664.541 482.273 617.786 482.273Z" fill="#5165F2"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="splash-container">
                <div className="XYZ-logo">
                    <svg viewBox="0 0 1698 882" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M322.401 398.727C385.973 293.152 483.602 154.655 576.689 9.34796C576.689 7.07749 575.554 5.94229 573.284 5.94229C567.608 5.94229 507.441 41.1339 480.196 78.596C431.382 185.306 374.621 288.611 318.995 393.051L103.305 18.4296C98.7637 8.21267 97.6285 7.07747 95.3581 7.07747C90.8172 7.07747 87.4116 11.6183 76.0594 25.2409C55.6255 53.6213 57.896 55.8917 57.896 63.8382L278.128 449.811C191.851 589.443 96.4933 737.021 0 877.788C0 880.058 1.13522 881.193 3.40565 881.193C9.08172 881.193 74.9242 847.137 102.169 809.675C162.336 676.854 222.502 562.198 281.533 456.623L521.064 875.517C522.199 878.923 523.334 881.193 525.605 881.193C529.01 881.193 538.092 872.111 561.932 836.92C566.472 830.109 567.608 824.432 566.472 821.027L322.401 398.727Z" fill="black"/>
                    <path d="M912.944 477.057C996.95 318.126 1086.63 158.061 1177.45 4.80707C1177.45 2.5366 1175.18 0.266174 1172.91 0.266174C1167.23 0.266174 1100.25 49.0804 1078.68 76.3256C1026.47 205.74 970.839 338.56 909.538 470.245L694.982 13.8888C691.577 5.94229 690.441 2.53662 688.171 2.53662C684.765 2.53662 680.224 7.07745 667.737 22.9705C642.762 53.6213 642.762 57.027 642.762 61.5679L853.912 494.085C852.777 676.854 852.777 859.624 852.777 869.841C852.777 873.247 853.912 874.382 857.318 874.382C862.994 874.382 875.481 865.3 885.698 853.948C908.403 830.108 912.944 815.351 912.944 809.675V477.057Z" fill="black"/>
                    <path d="M1585.02 63.8382C1609.99 63.8382 1633.83 63.8382 1646.32 59.2974L1213.8 811.945L1183.15 861.894C1183.15 863.03 1187.69 868.706 1188.83 868.706C1191.1 868.706 1237.64 867.57 1281.92 867.57C1295.54 867.57 1602.05 868.706 1616.8 868.706C1641.78 868.706 1648.59 867.571 1657.67 861.894C1674.7 842.596 1697.4 808.539 1697.4 805.134C1697.4 803.999 1696.27 802.863 1695.13 802.863C1692.86 802.863 1669.02 808.539 1611.13 808.539H1259.21C1245.59 808.539 1237.64 810.81 1229.7 817.621L1662.21 52.4861L1666.75 45.6748C1675.83 35.4579 1690.59 15.024 1690.59 10.4831C1690.59 9.34794 1690.59 7.07747 1687.19 7.07747C1684.92 7.07747 1664.48 8.21265 1632.7 8.21265C1617.94 8.21265 1318.24 7.07747 1302.35 7.07747C1286.46 7.07747 1278.51 10.4832 1269.43 20.7001C1242.18 51.3509 1236.51 59.2973 1236.51 63.8382C1236.51 64.9734 1238.78 66.1087 1239.91 66.1087C1242.18 66.1087 1253.53 63.8382 1272.83 63.8382H1585.02Z" fill="black"/>
                    </svg>
                </div>
                <p>
                    is a music label exploring new models for creating and distributing music on the internet.
                </p>        
                <p>
                    is owned and operated by holders of the $WAV token.
                </p>
                <p>
                    aims to be global, decentralized, and music-first.
                </p>
            </div>
        </div>
    )
  }
}
