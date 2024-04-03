import CustomLink from "@/components/custom-link"
import { auth } from "auth"

export default async function Index() {
  const session = await auth()
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Auth.js Prisma Edge Example</h1>
      <p>
        This is an example site to demonstrate how to use{" "}
        <CustomLink href="https://authjs.dev">Auth.js</CustomLink> with Prisma's new Edge-compatible
        client and adapters.
      </p>
      <div className="rounded-md bg-neutral-100">
        <h3 className="p-4 rounded-t-md bg-neutral-200">Current Session</h3>
        <pre className="p-8">{JSON.stringify(session, null, 2)}</pre>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-2 justify-between items-center">
          <div className="flex gap-4 items-center">
            <CustomLink href="https://www.prisma.io/blog/prisma-orm-support-for-edge-functions-is-now-in-preview">
              Prisma Announcement Blog Post
            </CustomLink>{" "}
            |
            <CustomLink href="https://www.prisma.io/docs/orm/prisma-client/deployment/edge/overview">
              Prisma Edge Docs
            </CustomLink>{" "}
            |
            <CustomLink href="https://github.com/ndom91/authjs-prisma-edge-example">
              Example Repo
            </CustomLink>
          </div>
        </div>
        <div className="flex gap-8 justify-between items-center my-4">
          <img src="https://authjs.dev/img/logo/logo-sm.webp" alt="Home" width="72" height="72" />
          <svg
            className="size-20"
            width="256px"
            height="310px"
            viewBox="0 0 256 310"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <title>Prisma</title>
            <g>
              <path
                d="M254.312882,235.518775 L148.000961,9.74987264 C145.309805,4.08935083 139.731924,0.359884549 133.472618,0.0359753113 C127.198908,-0.384374336 121.212054,2.71925839 117.939655,8.08838662 L2.63252565,194.847143 C-0.947129465,200.604248 -0.871814894,207.912774 2.8257217,213.594888 L59.2003287,300.896318 C63.5805009,307.626626 71.8662281,310.673635 79.5631922,308.384597 L243.161606,259.992851 C248.145475,258.535702 252.252801,254.989363 254.421072,250.271225 C256.559881,245.57581 256.523135,240.176915 254.32061,235.511047 L254.312882,235.518775 Z M230.511129,245.201761 L91.6881763,286.252058 C87.4533189,287.511696 83.388474,283.840971 84.269448,279.567474 L133.866738,42.0831633 C134.794079,37.6396542 140.929985,36.9364206 142.869673,41.0476325 L234.684164,236.021085 C235.505704,237.779423 235.515611,239.809427 234.711272,241.575701 C233.906934,243.341974 232.369115,244.667163 230.503401,245.201761 L230.511129,245.201761 Z"
                fill="#000000"
                fillRule="nonzero"
              />
            </g>
          </svg>
          <svg
            className="size-20"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 36 36"
          >
            <title>Neon</title>
            <path
              fill="#12FFF7"
              fillRule="evenodd"
              d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
              clipRule="evenodd"
            />
            <path
              fill="url(#a)"
              fillRule="evenodd"
              d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
              clipRule="evenodd"
            />
            <path
              fill="url(#b)"
              fillRule="evenodd"
              d="M0 6.207A6.207 6.207 0 0 1 6.207 0h23.586A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36H6.207A6.207 6.207 0 0 1 0 29.793V6.207Zm6.207-1.241c-.686 0-1.241.555-1.241 1.24v23.587c0 .686.555 1.242 1.24 1.242h10.925c.343 0 .434-.278.434-.621V16.18c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V6.207c0-.686.064-1.241-.621-1.241H6.207Z"
              clipRule="evenodd"
            />
            <path
              fill="#B9FFB3"
              d="M29.793 0A6.207 6.207 0 0 1 36 6.207v20.06c0 3.546-4.488 5.085-6.664 2.286l-6.805-8.754v10.615A5.586 5.586 0 0 1 16.945 36a.62.62 0 0 0 .62-.62v-19.2c0-3.547 4.488-5.086 6.665-2.286l6.805 8.753V1.241C31.035.556 30.479 0 29.793 0Z"
            />
            <defs>
              <linearGradient
                id="a"
                x1="36"
                x2="4.345"
                y1="36"
                y2="0"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B9FFB3" />
                <stop offset="1" stopColor="#B9FFB3" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="b"
                x1="36"
                x2="14.617"
                y1="36"
                y2="27.683"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1A1A1A" stopOpacity=".9" />
                <stop offset="1" stopColor="#1A1A1A" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="size-20"
            width="256px"
            height="222px"
            viewBox="0 0 256 222"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <title>Vercel</title>
            <g>
              <polygon fill="#000000" points="128 0 256 221.705007 0 221.705007" />
            </g>
          </svg>
          <svg
            className="size-20"
            viewBox="0 0 256 231"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <title>CloudFrame Workers</title>
            <defs>
              <linearGradient
                x1="50%"
                y1="100%"
                x2="25.7%"
                y2="8.7%"
                id="cfWorkersLinearGradient-1"
              >
                <stop stopColor="#EB6F07" offset="0%" />
                <stop stopColor="#FAB743" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="81%"
                y1="83.7%"
                x2="40.5%"
                y2="29.5%"
                id="cfWorkersLinearGradient-2"
              >
                <stop stopColor="#D96504" offset="0%" />
                <stop stopColor="#D96504" stopOpacity="0" offset="100%" />
              </linearGradient>
              <linearGradient x1="42%" y1="8.7%" x2="84%" y2="79.9%" id="cfWorkersLinearGradient-3">
                <stop stopColor="#EB6F07" offset="0%" />
                <stop stopColor="#EB720A" stopOpacity="0" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="100%"
                x2="25.7%"
                y2="8.7%"
                id="cfWorkersLinearGradient-4"
              >
                <stop stopColor="#EE6F05" offset="0%" />
                <stop stopColor="#FAB743" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="-33.2%"
                y1="100%"
                x2="91.7%"
                y2="0%"
                id="cfWorkersLinearGradient-5"
              >
                <stop stopColor="#D96504" stopOpacity="0.8" offset="0%" />
                <stop stopColor="#D96504" stopOpacity="0.2" offset="49.8%" />
                <stop stopColor="#D96504" stopOpacity="0" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="50%"
                y1="100%"
                x2="25.7%"
                y2="8.7%"
                id="cfWorkersLinearGradient-6"
              >
                <stop stopColor="#FFA95F" offset="0%" />
                <stop stopColor="#FFEBC8" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="8.1%"
                y1="1.1%"
                x2="96.5%"
                y2="48.8%"
                id="cfWorkersLinearGradient-7"
              >
                <stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%" />
                <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="-13.7%"
                y1="104.2%"
                x2="100%"
                y2="46.2%"
                id="cfWorkersLinearGradient-8"
              >
                <stop stopColor="#FFFFFF" stopOpacity="0.5" offset="0%" />
                <stop stopColor="#FFFFFF" stopOpacity="0.1" offset="100%" />
              </linearGradient>
            </defs>
            <g>
              <path
                d="M65.820799,3.32378893 L95.981106,57.7354448 L68.2828649,107.592279 C65.5870161,112.433115 65.5870161,118.324009 68.2828649,123.164845 L95.981106,173.144783 L65.820799,227.556439 C60.1456908,224.742882 55.433019,220.308687 52.2794367,214.815248 L4.26915217,131.412766 C-1.42305072,121.503054 -1.42305072,109.315622 4.26915217,99.4059097 L52.2794367,16.0034282 C55.4425502,10.5327862 60.1542813,6.1208924 65.820799,3.32378893 Z"
                fill="url(#cfWorkersLinearGradient-1)"
              />
              <path
                d="M68.2828649,107.65383 C65.609809,112.478677 65.609809,118.339998 68.2828649,123.164845 L95.981106,173.144783 L65.820799,227.556439 C60.1456908,224.742882 55.433019,220.308687 52.2794367,214.815248 L4.26915217,131.412766 C0.452950062,124.82674 21.8113715,116.948129 68.2828649,107.715382 L68.2828649,107.65383 Z"
                fill="url(#cfWorkersLinearGradient-2)"
                opacity="0.7"
              />
              <path
                d="M68.8983814,8.8018855 L95.981106,57.7354448 L91.4878358,65.5525039 L67.6057968,25.1130719 C60.7120124,13.8491205 50.1866807,19.696527 37.0146283,42.4706363 L38.984281,39.0852958 L52.2794367,16.0034282 C55.4097226,10.5506927 60.0766443,6.14066572 65.6976958,3.32378893 L68.8368297,8.8018855 L68.8983814,8.8018855 Z"
                fill="url(#cfWorkersLinearGradient-3)"
                opacity="0.5"
              />
              <path
                d="M203.696488,16.0034282 L251.706773,99.4059097 C257.431076,109.254173 257.431076,121.564503 251.706773,131.412766 L203.696488,214.815248 C197.982679,224.711861 187.425867,230.811352 175.998247,230.818676 L127.987962,230.818676 L187.69306,123.164845 C190.366116,118.339998 190.366116,112.478677 187.69306,107.65383 L127.987962,0 L175.998247,0 C187.425867,0.00732404312 197.982679,6.10681526 203.696488,16.0034282 L203.696488,16.0034282 Z"
                fill="url(#cfWorkersLinearGradient-4)"
              />
              <path
                d="M173.536181,230.449366 L126.141413,230.880227 L183.507548,122.672432 C186.111867,117.786429 186.111867,111.924318 183.507548,107.038314 L126.141413,0 L136.974503,0 L197.172013,106.545901 C200.074507,111.667339 200.051094,117.942106 197.110462,123.041742 C184.154772,145.558461 171.290373,168.127584 158.517579,190.748554 C146.822766,211.306804 151.870001,224.540408 173.536181,230.449366 L173.536181,230.449366 Z"
                fill="url(#cfWorkersLinearGradient-5)"
              />
              <path
                d="M79.9776778,230.818676 C75.0535461,230.818676 70.1294143,229.649195 65.820799,227.556439 L125.033483,120.764331 C126.880033,117.440542 126.880033,113.378134 125.033483,110.054345 L65.820799,3.32378893 C70.2222355,1.14434147 75.066203,0.00706214019 79.9776778,0 L127.987962,0 L187.69306,107.65383 C190.366116,112.478677 190.366116,118.339998 187.69306,123.164845 L127.987962,230.818676 L79.9776778,230.818676 Z"
                fill="url(#cfWorkersLinearGradient-6)"
              />
              <path
                d="M183.507548,110.054345 L122.448314,0 L127.987962,0 L187.69306,107.65383 C190.366116,112.478677 190.366116,118.339998 187.69306,123.164845 L127.987962,230.818676 L122.448314,230.818676 L183.507548,120.764331 C185.354097,117.440542 185.354097,113.378134 183.507548,110.054345 Z"
                fill="url(#cfWorkersLinearGradient-7)"
                opacity="0.6"
              />
              <path
                d="M125.033483,110.054345 L65.820799,3.32378893 C67.6673485,2.33896258 69.8832077,1.60034282 71.9759637,0.98482635 C85.0249129,24.4360038 104.290578,60.0128557 129.834512,107.65383 C132.507568,112.478677 132.507568,118.339998 129.834512,123.164845 L71.052689,229.587643 C68.959933,228.972126 67.8520034,228.541265 65.8823507,227.61799 L124.971932,120.825883 C126.818481,117.502094 126.818481,113.439685 124.971932,110.115896 L125.033483,110.054345 Z"
                fill="url(#cfWorkersLinearGradient-8)"
                opacity="0.6"
              />
            </g>
          </svg>
          <svg
            className="size-20"
            xmlns="http://www.w3.org/2000/svg"
            width="12em"
            viewBox="0 0 54 54"
            fill="none"
          >
            <title>Turso</title>
            <mask
              id="a"
              width="29"
              height="48"
              x="27"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
            >
              <path fill="#fff" d="M55.943.621H27.94v47.213h28.003V.62Z"></path>
            </mask>
            <g mask="url(#a)">
              <path
                fill="#1EBCA1"
                d="M27.94 11.464c20.79 0 17.082 8.649 17.082 8.649-.184 5.51-2.23 17.776-2.908 19.077-.679 1.302-4.281 5.033-7.1 6.464 0 0-1.018-1.087-1.641-2.045-.789.938-4.875 4.23-5.433 4.23V11.464Z"
              ></path>
              <path
                fill="#1EBCA1"
                d="M45.277 18.616c0 .888-.255 1.492-.255 1.492-.184 5.51-2.23 17.775-2.908 19.077-.679 1.302-4.281 5.033-7.1 6.464 0 0-1.018-1.087-1.641-2.045-.789.938-4.875 4.23-5.433 4.23V18.616h17.337Z"
              ></path>
              <path
                fill="url(#b)"
                d="m42.662 20.008-.998 8.115-5.548.498.489 6.858s-3.378 2.818-8.661 2.818v-17.79l14.723-.5h-.005Z"
              ></path>
              <path
                fill="#4FF7D1"
                d="m53.945 16.618-27.004 9.245V16.99l24.357-6.184 2.647 5.812Z"
              ></path>
              <path
                fill="#4FF7D1"
                d="m53.948 16.616-7.44 2.499V1.12s7.44 8.13 7.44 15.496ZM37.324 15.424l2.65-5.252 4.036 4.898M26.941 16.99h5.987l1.208 16.23a29.01 29.01 0 0 1-7.19.903V16.99h-.005Z"
              ></path>
            </g>
            <mask
              id="c"
              width="29"
              height="48"
              x="0"
              y="0"
              maskUnits="userSpaceOnUse"
              style={{ maskType: "luminance" }}
            >
              <path fill="#fff" d="M0 .621h28.004v47.213H0V.62Z"></path>
            </mask>
            <g mask="url(#c)">
              <path
                fill="#1EBCA1"
                d="M28.004 11.464c-20.79 0-17.082 8.649-17.082 8.649.184 5.51 2.23 17.776 2.908 19.077.679 1.302 4.28 5.033 7.1 6.464 0 0 1.018-1.087 1.641-2.045.788.938 4.874 4.23 5.433 4.23V11.464Z"
              ></path>
              <path
                fill="#1EBCA1"
                d="M10.667 18.616c0 .888.254 1.492.254 1.492.185 5.51 2.23 17.775 2.909 19.077.678 1.302 4.28 5.033 7.1 6.464 0 0 1.017-1.087 1.64-2.045.789.938 4.875 4.23 5.434 4.23V18.616H10.667Z"
              ></path>
              <path
                fill="url(#d)"
                d="m13.282 20.008.998 8.115 5.547.498-.489 6.858s3.378 2.818 8.662 2.818v-17.79l-14.723-.5h.005Z"
              ></path>
              <path
                fill="#4FF7D1"
                d="m1.999 16.618 27.003 9.245V16.99L4.646 10.806l-2.647 5.812Z"
              ></path>
              <path
                fill="#4FF7D1"
                d="m1.996 16.616 7.439 2.499V1.12s-7.44 8.13-7.44 15.496ZM18.62 15.424l-2.65-5.252-4.035 4.898M29.002 16.99h-5.987l-1.207 16.23c2.36.603 4.774.903 7.189.903V16.99h.005Z"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="b"
                x1="42.662"
                x2="27.939"
                y1="-45.879"
                y2="-45.879"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1D2B33"></stop>
                <stop offset="1" stopColor="#121B24"></stop>
              </linearGradient>
              <linearGradient
                id="d"
                x1="13.282"
                x2="28.005"
                y1="-45.879"
                y2="-45.879"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#1D2B33"></stop>
                <stop offset="1" stopColor="#121B24"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}
