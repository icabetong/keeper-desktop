import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { Asset } from "./Asset";

type AssetListProps = {
    assets: Asset[],
    onItemSelect: (asset: Asset) => void,
}

const AssetList = (props: AssetListProps) => {
    return (
        <List>{
            props.assets.map((asset: Asset) => {
                return (
                    <AssetItem
                        key={asset.assetId}
                        asset={asset}
                        onItemSelect={props.onItemSelect}/>
                )
            })
        }</List>
    )
}

type AssetItemProps = {
    asset: Asset,
    onItemSelect: (asset: Asset) => void,
}

const AssetItem = (props: AssetItemProps) => {
    return (
        <ListItem
            button
            key={props.asset.assetId}
            onClick={() => props.onItemSelect(props.asset)}>
            <ListItemText
                primary={props.asset.assetName}
                secondary={props.asset.category?.categoryName}/>
        </ListItem>
    )
}

export default AssetList;