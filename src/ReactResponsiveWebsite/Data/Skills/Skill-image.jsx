import aspnetmvc from '../../Images/Skills/aspnetmvc.png';
import aspnetcore from '../../Images/Skills/aspnetcore.png';
import aspnetwebapi from '../../Images/Skills/aspnetwebapi.png';
import aspnetrestapi from '../../Images/Skills/aspnetrestapi.png';
import bootstrap from '../../Images/Skills/bootstrap.png';
import csharp from '../../Images/Skills/csharp.png';
import css from '../../Images/Skills/css.png';
import entityframework from '../../Images/Skills/entityframework.png';
import figma from '../../Images/Skills/figma.png';
import github from '../../Images/Skills/github.png';
import gitlab from '../../Images/Skills/gitlab.png';
import html from '../../Images/Skills/html.png';
import javascript from '../../Images/Skills/js.png';
import jquery from '../../Images/Skills/jquery.png';
import kendoui from '../../Images/Skills/kendo.png';
import linq from '../../Images/Skills/Linq.png';
import materialui from '../../Images/Skills/materialui.png';
import msdotnet from '../../Images/Skills/msdotnet.png';
import react from '../../Images/Skills/react.png';
import sql from '../../Images/Skills/sql.png';
import typescript from '../../Images/Skills/typescript.png';
import azure from '../../Images/Skills/azure.png'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase().replace(/\s+/g, '');;
    switch (skillID) {
        case 'aspnetmvc':
            return aspnetmvc
        case 'aspnetcore':
            return aspnetcore
        case 'aspnetwebapi':
            return aspnetwebapi
        case 'aspnetrestapi':
            return aspnetrestapi
        case 'bootstrap':
            return bootstrap
        case 'csharp':
            return csharp
        case 'css':
            return css
        case 'entityframework':
            return entityframework
        case 'figma':
            return figma
        case 'github':
            return github
        case 'gitlab':
            return gitlab
        case 'html':
            return html
        case 'javascript':
            return javascript
        case 'jquery':
            return jquery
        case 'kendoui':
            return kendoui
        case 'linq':
            return linq
        case 'materialui':
            return materialui
        case 'msdotnet':
            return msdotnet
        case 'react':
            return react
        case 'sql':
            return sql
        case 'typescript':
            return typescript
        case 'azure':
            return azure
        default :
        return msdotnet
    }
}