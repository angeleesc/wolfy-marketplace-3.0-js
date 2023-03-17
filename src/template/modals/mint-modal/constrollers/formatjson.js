export const fromMatMinData = (nftdata) => {

    const dataForMetadaTotaSent = {
        nftName: nftdata.nftName,
        nftDescription: nftdata.nftDescription,
        ...(nftdata.nftUrlPage ? { nftUrlPage: nftdata.nftUrlPage } : {}),
        ...(nftdata.isAddPropieties === true ? { nftsAtributes: JSON.stringify( nftdata.nftsAtributes )}:{}),
    }

    return dataForMetadaTotaSent

}