import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function ProductCard({ product, selected, onExplore }) {
  return (
    <View style={[styles.card, selected && styles.cardSelected]}>
      <View style={styles.row}>
        <View style={[styles.thumb, { backgroundColor: product.tint }]}>
          <Text style={styles.thumbText}>{product.icon}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.cardLabel}>{product.category.toUpperCase()}</Text>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.rating}>
            {'★'.repeat(Math.round(product.rating))}
            <Text style={styles.ratingMuted}>{'★'.repeat(5 - Math.round(product.rating))}</Text>
            <Text style={styles.ratingValue}>  {product.rating.toFixed(1)}</Text>
          </Text>
        </View>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      <Text style={styles.productDescription}>{product.description}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          selected && styles.buttonSelected,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => onExplore(product)}
      >
        <Text style={[styles.buttonText, selected && styles.buttonTextSelected]}>
          {selected ? '✓ Viewing' : 'Explore product'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderColor: '#1e293b',
    borderRadius: 24,
    borderWidth: 2,
    padding: 20,
    gap: 14,
  },
  cardSelected: {
    borderColor: '#22d3ee',
    backgroundColor: '#172a3a',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 14,
  },
  thumb: {
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    justifyContent: 'center',
    width: 56,
  },
  thumbText: {
    fontSize: 28,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  cardLabel: {
    color: '#94a3b8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  productName: {
    color: '#f8fafc',
    fontSize: 20,
    fontWeight: '700',
  },
  rating: {
    color: '#fbbf24',
    fontSize: 13,
  },
  ratingMuted: {
    color: '#475569',
  },
  ratingValue: {
    color: '#cbd5e1',
    fontWeight: '600',
  },
  price: {
    color: '#a5f3fc',
    fontSize: 20,
    fontWeight: '800',
  },
  productDescription: {
    color: '#cbd5e1',
    fontSize: 15,
    lineHeight: 22,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#22d3ee',
    borderRadius: 14,
    padding: 14,
  },
  buttonSelected: {
    backgroundColor: 'transparent',
    borderColor: '#22d3ee',
    borderWidth: 1.5,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#083344',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTextSelected: {
    color: '#67e8f9',
  },
});
